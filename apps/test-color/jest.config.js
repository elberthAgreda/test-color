module.exports = {
  name: 'test-color',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/test-color',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
