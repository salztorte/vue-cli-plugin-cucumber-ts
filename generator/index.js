module.exports = (api, options, rootOptions = {}) => {
  api.render('./template');

  api.extendPackage({
    devDependencies: {
      "rimraf": "~3.0.2",
      "@types/chai": "^4.1.7",
      "@types/cucumber": "^4.0.4",
      "chai": "^4.2.0",
      "cucumber": "^5.0.2",
      "nodemon": "^1.18.6",
      "ts-loader": "^5.3.0",
      "vue-loader": "^15.4.2",
      "vue-property-decorator": "^7.2.0",
      "webpack": "^4.26.0",
      "webpack-cli": "^3.1.2",
      "webpack-dev-server": "^3.1.10"
    },
    scripts: {
      "pretest": "webpack --config ./webpack.test.config.js",
      "test": "cucumber-js",
      "posttest": "rimraf ./features/step_definitions/steps.js"
    }
  });
};
