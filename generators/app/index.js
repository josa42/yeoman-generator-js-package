const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  install () {
    this.spawnCommandSync('git', ['init'])
    this.installDependencies({ npm: true, bower: false })
  }

  writing () {
    this.fs.copy(this.templatePath('.editorconfig'), '.editorconfig')
    this.fs.copy(this.templatePath('.eslintrc'), '.eslintrc')
    this.fs.copy(this.templatePath('.gitignore'), '.gitignore')
    this.fs.copy(this.templatePath('LICENSE.md'), 'LICENSE.md')
    this.fs.copy(this.templatePath('package.json'), 'package.json')
    this.fs.copy(this.templatePath('README.md'), 'README.md')
  }
}
