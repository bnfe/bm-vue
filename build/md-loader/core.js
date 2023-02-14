const cheerio = require('cheerio')
const loadUtils = require('loader-utils')
const hljs = require('highlight.js')

// 自定义块
const containers = require('./container')

const REGEXP_DEMO = /:::\s?demo\s?([^]+?):::/g
const REGEXP_TITLE = /([^]*)\n?(```[^]+```)/
const REGEXP_HTML = /[^]+\n?```\s?html\s?([^]+?)```/g

const REGEXP_VUE = /:::\s?vue\s?([^]+?):::/g
const REGEXP_VUE_SCRIPT = /[^]+\n?```\s?script\s?([^]+?)```/g

const md = require('markdown-it')({
  html: true,
  // 代码高亮
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(str, {language:lang,ignoreIllegals:true}).value +
          '</code></pre>'
        )
      } catch (__) {}
    }

    return (
      '<pre v-pre class="hljs"><code>' +
      md.utils.escapeHtml(str) +
      '</code></pre>'
    )
  }
})
  // 定义自定义的块容器
  .use(containers)

function getDemoTag(source) {
  let demoTags = source.match(REGEXP_DEMO)
  if (!demoTags) return []
  return demoTags.map(i =>
    i.replace(REGEXP_DEMO, (match, p1, offset) => {
      return p1
    })
  )
}

/**
 * demo tags => vue template html
 * 示例：
 * ::: demo
 * ```html
 *  <button>123</button>
 * ```
 * :::
 * @param {*} source
 */
function getVueTemplateTags(source) {
  let template = getDemoTag(source)
  if (template.length) {
    template = template.map(i => {
      const title = i.match(REGEXP_TITLE)[1]
      i = i.replace(REGEXP_HTML, (match, p1, offset) => {
        const $ = cheerio.load(p1, {
          decodeEntities: false,
          lowerCaseAttributeNames: false,
          lowerCaseTags: false
        })

        $('script').remove()

        return (
          `<div class="bm-panel">\n` +
          `<div class="bm-panel__header"><div class="bm-panel__title">${title}</div></div>\n` +
          `<div class="bm-panel__body">` +
          $.html() +
          `</div>\n` +
          `</div>\n`
        )
      })
      return i
    })
  }

  return template.join('')
}

function getVueTag(source) {
  let vueTags = source.match(REGEXP_VUE)
  if (!vueTags) return []
  return vueTags.map(i =>
    i.replace(REGEXP_VUE, (match, p1, offset) => {
      return p1
    })
  )
}

/**
 * vue tags => vue script
 * 示例：
 * ::: vue
 * ``` javascript
 * <script>
 * export default {};
 * </script>
 * ```
 * :::
 * @param {*} source
 */
function getVueRunScriptTags(source) {
  let template = getVueTag(source)
  if (template.length) {
    template = template.map(i => {
      const title = i.match(REGEXP_TITLE)[1]
      i = i.replace(REGEXP_VUE_SCRIPT, (match, p1, offset) => {
        const $ = cheerio.load(p1, {
          decodeEntities: false,
          lowerCaseAttributeNames: false,
          lowerCaseTags: false
        })

        return ($.html())
      })
      return i
    })
  }

  return template.join('')
}

/**
 * remove => demo script tags
 * @param {*} source
 */
function getMdDocs(source) {
  const $ = cheerio.load(source, {
    decodeEntities: false,
    lowerCaseAttributeNames: false,
    lowerCaseTags: false
  })

  // const output = {
  //   style: $.html('style'),
  //   script: $.html($('script').first())
  // }

  $('style').remove()

  return md.render($.html())
}

/**
 * html => vue file template
 * @param  {[type]} html [description]
 * @return {[type]}      [description]
 */
function renderToVueTemplate(source) {
  const $ = cheerio.load(source, {
    decodeEntities: false,
    lowerCaseAttributeNames: false,
    lowerCaseTags: false
  })

  const output = {
    style: $.html('style'),
    script: $.html($('script[name="vue"]').first())
  }

  const mdDocs = getMdDocs(source)
  const templateHtml = getVueTemplateTags(source)

  return (
    `<template>\n` +
    `<div>\n` +
    `<div class="bm-vue-demo">` +
    `${templateHtml}` +
    `</div>` +
    `<div class="bm-markdown-doc">` +
    `${mdDocs}` +
    `</div>` +
    `</div>\n` +
    `</template>\n` +
    output.style +
    '\n' +
    output.script
  )
}

module.exports = function(source) {
  this.cacheable && this.cacheable()
  const options = Object.assign({}, loadUtils.getOptions(this)) // 获取loader配置的options对象
  // ...
  source = renderToVueTemplate(source)
  // console.log(`mdDocs:\n${source}`)
  return source
}
