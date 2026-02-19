module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', { runtime: 'automatic' }]
    // allow to use jsx inside test cases
  ],
};

// this config overrides paresle babel config because parcel uses babel config behind the schehe so for use this need to setup the parcel