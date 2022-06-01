AFRAME.registerComponent("change-color-on-hover", {
  schema: {
    color: { default: "red" },
  },

  init: function () {
    let data = this.data;
    let el = this.el; // The element we are looking at

    let previousColor = el.getAttribute("material").color;
    el.addEventListener("mouseenter", function () {
      previousColor = el.getAttribute("material").color;
      el.setAttribute("color", data.color);
    });

    el.addEventListener("mouseleave", function () {
      el.setAttribute("color", previousColor);
    });

    el.addEventListener("click", function () {
      previousColor = "black";
      el.setAttribute("color", previousColor);
    });
  },
});

let cheeseplateCubes = []
for (var i = 0; i < 100; i++) {
  cheeseplateCubes.push(new Vector(Math.random(), 1, Math.random()))
}


// Create a bundle of behaviors
AFRAME.registerComponent('cheeseplate-behavior', {
	schema: {
	//   color: {default: 'red'}
		color: {default: "img/textures/wood.png"}
	},

	init: function () {
		let data = this.data;
		let el = this.el;  // The element we are looking at
		
		let previousColor = el.getAttribute('material').color;
		el.addEventListener('mouseenter', function () {
			previousColor = el.getAttribute('material').color;
			el.setAttribute('color', data.color);
      
      
		});

		el.addEventListener('mouseleave', function () {
			el.setAttribute('color', previousColor);
		});
    
    el.addEventListener('click', function () {
		 cheeseplateCubes.pop()
		});
    
	}
});


Vue.component("cheeseplate", {
	template: `
		<a-box src="/img/textures/wood.png"
			cheeseplate-behavior
			depth="2" height="2" width="2"
		>
    
      <!-- make all the cheese cubes -->
      	<a-box color="orange" 
          depth=".1" height=".1" width=".1"
          v-for="cube in cheeseplateCubes" :position="cube.toAFrame()"
        >
    
		</a-box>
	`,

  data() {
    return {
    cheeseplateCubes: cheeseplateCubes,
    }
  },
	props: ["room"]

})