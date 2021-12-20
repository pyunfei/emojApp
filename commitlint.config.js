module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增内容
        '✨ feat', // 新增内容
        'fix', // 修复bug
        '🐞 fix', // 修复bug
        'refactor', // 代码重构（不改变外部行为）
        '🦄 refactor', // 代码重构（不改变外部行为）
        'style', // 代码格式化
        '🌈 style', // 代码格式化
        'docs', // 文档更新
        '📃 docs', // 文档更新
        'perf', // 优化（代码或性能优化）
        '🎈 perf', // 优化（代码或性能优化）
        'build', // 项目打包相关(如build文件夹下编译插件的修改)
        '🔧 build', // 项目打包相关(如build文件夹下编译插件的修改)
        'chore', // 改变构建流程、或者增加依赖库、工具等
        '🐳 chore', // 改变构建流程、或者增加依赖库、工具等
        'test', // 测试代码
        '🧪 test', // 测试代码
        'ci', // ci配置相关 例如对k8s, docker的配置文件的修改
        '🐎 ci', // ci配置相关 例如对k8s, docker的配置文件的修改
        'revert', // 回到上一个版本
        '↩ revert', // 回到上一个版本
      ],
    ],
    'type-case': [2, 'always', 'camel-case'], // type必须是驼峰
    'type-empty': [2, 'never'], // type不能为空
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'subject-empty': [0],
    'header-max-length': [0, 'always', 72],
  },
};
