<template>
  <div class="dw-header">
    <div class="dw-header__wave">
    </div>
    <div class="dw-header__nav">
      <h1 class="dw-header__logo">Dreamsmile 筑梦社群</h1>
      <ul class="dw-header__list">
        <li class="dw-header__item"><a href="javascript:;">关于我们</a></li>
        <router-link :to="{path: 'dream'}" tag="li" class="dw-header__item"><a href="javascript:;">梦想墙</a></router-link>
        <router-link :to="{path: 'download'}" tag="li" class="dw-header__item"><a href="javascript:;">APP下载</a>
        </router-link>
        <router-link :to="{path: 'signup'}" tag="li" class="dw-header__item"><a href="javascript:;">注册梦想</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {}
</script>
