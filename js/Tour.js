AFRAME.registerComponent("tour",{

  schema:{
    state: { type: "string", default: "places-list" },
    selectedPlace: { type: "string", default: "#card1" },
  },
  
  init:function(){

    this.placesContainer=this.el;
    this.createPlace()

  },

  createPlace:function(){
    const details={
      park:{
        position:{x:0,y:2,z:-1},
        rotation:{x:0 ,y:-90 ,z:0},
        src:"assets/thumbnails/park.png",
        title:"Park",
        id:"park"
      },
     
    }

    for (var key in details) {
      const item = details[key];
      // Thubnail Element
      const thumbNail = this.createThumbNail(item);
      // Title
      const title = this.createTitleEl(item);
      thumbNail.appendChild(title);
      this.placesContainer.appendChild(thumbNail);
    }
  },

  createThumbNail: function(item) {
    const entityEl = document.createElement("a-entity");
    const id = `place-${item.id}`;
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 7
    });

    entityEl.setAttribute("position", item.position);
    entityEl.setAttribute("rotation", item.rotation);
    entityEl.setAttribute("material", { src: item.src, opacity:0.7});
    entityEl.setAttribute("cursor-listener",{})
    return entityEl;
  },
  createTitleEl: function(item) {
    const entityEl = document.createElement("a-entity");
    const id = `title-${item.id}`;
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 20,
      color: "#e91e63",
      value: item.title
    });
    const position = { x: 0, y: 0, z: -1 };
    entityEl.setAttribute("position", position);

   
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
})