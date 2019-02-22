const system = {
  colors : {
    primaryColor: {
      name: "Primary Color",
      value: '#1363A8',
      description: '#1363A8',
      get sample() { return this.description },
    },
    primaryDark: {
      name: "Primary Dark",
      value: '#0F5080',
      description: '#0F5080',
      get sample() { return this.description },
    },
    primaryBgShading: {
      name: "Primary Background Shading",
      value: '#F5F8FA',
      description: '#F5F8FA',
      get sample() { return this.description },
    },
    secondaryColor: {
      name: "Seconday Color",
      value: '#4195D2',
      description: '#4195D2',
      get sample() { return this.description },
    },
    secondaryBgShading: {
      name: "Secondary Background Shading",
      value: '#7F969F',
      description: '#7F969F',
      get sample() { return this.description },
    },
    accent: {
      name: "Accent",
      value: '#ED5D28',
      description: '#ED5D28',
      get sample() { return this.description },
    },
    emphasis: {
      name: "Emphasis",
      value: '#03100D',
      description: '#03100D',
      get sample() { return this.description },
    },
    darkText: {
      name: "Text (Dark)",
      value: '#595959',
      description: '#595959',
      get sample() { return this.description },
    },
    lightText: {
      name: "Text (Light)",
      value: '#FFFFFF',
      description: '#FFFFFF',
      get sample() { return this.description },
    }
  },

  fontSizing: { // Based on CSS default font-resizing of 62.5%
    xs: '1.3rem', // base size for mobile view
    s: '1.6rem', // base size for text
    sm: '1.8rem', // base size for menu and button text
    m: '2rem', // base heading/sub-heading size
    ml: '3rem', // base headline size
    l: '4rem', // for big emphasis
    xl: '5rem', // ultra large
    xxl: '6rem' // site banner headline
  },

  breakpoints: [
    '(max-width: 500px)',
    '(max-width: 800px)',
    '(max-width: 1430px)'
  ],
  // for media queries -- express them as @media ${system.breakpoints[0]} {styles here}
  // in the arr, the first is for mobile, second is for portrait tablet, third is for desktop

}

export default system