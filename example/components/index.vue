<template lang="html">
  <Container class="index-page">
    <header>
      <section class="brand">
        <div class="brand-title">Bm vue</div>
        <div class="brand-description">巴奴移动端组件库</div>
      </section>
    </header>
    <main>
      <bm-panel>
        <bm-panel-header title="数据录入(12)"/>
        <bm-panel-body>
          <bm-cell hasArrow @click="$router.push('/calendar')">
            日历 Calendar
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/checkbox')">
            复选框 Checkbox
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/date-picker')">
            日期选择器 DatePicker
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/file-picker')">
            文件选择器 FilePicker
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/input')">
            文本框 Input
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/keyboard')">
            虚拟键盘 Keyboard
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/picker')">
            选择器 Picker
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/radio')">
            单选框 Radio
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/search-bar')">
            搜索栏 SearchBar
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/slider')">
            滑动输入框 Slider
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/stack-picker')">
            层叠选择器 StackPicker
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/stepper')">
            步进器 Stepper
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/switch')">
            开关 Switch
          </bm-cell>
        </bm-panel-body>
      </bm-panel>

      <bm-panel>
        <bm-panel-header title="操作反馈(8)"/>
        <bm-panel-body>
          <bm-cell hasArrow @click="$router.push('/action-sheet')">
            动作面板 ActionSheet
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/activity-indicator')">
            活动指示器 ActivityIndicator
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/button')">
            按钮 Button
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/message')">
            消息 Message
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/modal')">
            模态框 Modal
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/pull')">
            上拉加载下拉刷新 Pull
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/swipe-action')">
            滑动操作 SwipeAction
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/toast')">
            轻提示 Toast
          </bm-cell>
        </bm-panel-body>
      </bm-panel>
      <bm-panel>
        <bm-panel-header title="数据展示(8)"/>
        <bm-panel-body>
          <bm-cell hasArrow @click="$router.push('/badge')">
            徽标 Badge
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/carousel')">
            走马灯 Carousel
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/cell')">
            列表项 Cell
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/collapse')">
            折叠面板 Collapse
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/icon')">
            图标 Icon
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/notice-bar')">
            通知栏 NoticeBar
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/panel')">
            面板 Panel
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/popper')">
            气泡层 Popper
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/progress')">
            进度条 Progress
          </bm-cell>
        </bm-panel-body>
      </bm-panel>

      <bm-panel>
        <bm-panel-header title="导航(3)"/>
        <bm-panel-body>
          <bm-cell hasArrow @click="$router.push('/nav-bar')">
            导航栏 NavBar
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/popup')">
            弹出框 Popup
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/tab-bar')">
            标签栏 TabBar
          </bm-cell>
          <bm-cell hasArrow @click="$router.push('/tabs')">
            标签页 Tabs
          </bm-cell>
        </bm-panel-body>
      </bm-panel>

       <bm-panel>
        <bm-panel-header title="其他(1)"/>
        <bm-panel-body>
          <bm-cell hasArrow @click="$router.push('/locale-provider')">
            国际化 LocaleProvider
          </bm-cell>
        </bm-panel-body>
      </bm-panel>


    </main>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';


export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {

    }
  },
  methods: {

  },
};
</script>
