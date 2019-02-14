<template>
  <div id="particles-js"/>
</template>

<script>
export default {
  // name: 'ParticlesJS',
  mounted() {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },
  methods: {
    initParticlesJS() {
      /* eslint-disable */
      particlesJS('particles-js', {
        'particles': {
          'number': {
            'value': 13,
            'density': {
              'enable': true,
              'value_area': 800
            }
          },
          'color': {
            // 'value': '#FF8A5C'
            // 'value': '#78DBFF'
            'value': '#5AC1FF'
          },
          'shape': {
            'type': 'polygon',
            'stroke': {
              'width': 0,
              'color': '#000'
            },
            'polygon': {
              'nb_sides': 6
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 1,
            'random': false,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.1,
              'sync': true
            }
          },
          'size': {
            'value': 6,
            'random': true,
            'anim': {
              'enable': true,
              'speed': 10,
              'size_min': 1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': false,
            'distance': 300,
            'color': '#ffffff',
            'opacity': 0.4,
            'width': 2
          },
          'move': {
            'enable': true,
            'speed': 33,
            'direction': 'top-right',
            'random': true,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': false,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': true,
              'mode': 'repulse'
            },
            'onclick': {
              'enable': true,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 800,
              'line_linked': {
                'opacity': 0
              }
            },
            'bubble': {
              'distance': 800,
              'size': 80,
              'duration': 2,
              'opacity': 0.8,
              'speed': 3
            },
            'repulse': {
              'distance': 200,
              'duration': 2
            },
            'push': {
              'particles_nb': 1
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      })
    }
  }

}
</script>

<style scoped lang="scss">
canvas {
  display: block;
  vertical-align: bottom;
}
#particles-js {
  position:absolute;
  width: 100%;
  height: 100%;
  // background-color: #cccccc;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
#particles-js {
  @extend .center-abs;
  top: 0;
  z-index: 100;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  canvas.particles-js-canvas-el {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>