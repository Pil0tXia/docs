# VuePress + Vdoing 文档站

本站地址：https://docs.pil0txia.com

## 2023-1-5 搭建完成

使用主题：[xugaoyi/vuepress-theme-vdoing](https://github.com/xugaoyi/vuepress-theme-vdoing)

基础设施：多吉云OSS + 多吉云CDN

包含：南京信息工程大学 操作系统课程笔记 和 汇编语言课程笔记

## 2023-1-18_升级 Node.js 18 后

node.js - Error message "error:0308010C:digital envelope routines::unsupported" - Stack Overflow

https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported

```
export NODE_OPTIONS=--openssl-legacy-provider
```

## 2023-1-22 npm转yarn

原因：[Google Analytics 插件 | VuePress](https://vuepress.vuejs.org/zh/plugin/official/plugin-google-analytics.html)

迁移文档：[Migrating from npm | Yarn](https://classic.yarnpkg.com/lang/en/docs/migrating-from-npm/)

此仓库：

```
yarn install
yarn add [package] --dev
yarn dev
```

## 2023-2-10 页面标题SEO优化

[提问: 如何将笔记名称或章节名称添加进title以利于更好的SEO · Issue #666 · xugaoyi/vuepress-theme-vdoing](https://github.com/xugaoyi/vuepress-theme-vdoing/issues/666)

`docs\node_modules\@vuepress\core\lib\node\ClientComputedMixin.js`

```
return siteTitle
        ? selfTitle
          ? (selfTitle + ' - ' + siteTitle)
          : siteTitle
        : selfTitle || 'VuePress'
```

