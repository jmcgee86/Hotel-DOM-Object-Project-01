var hotel = { 
  name: 'Biltmore',
  rooms: 500,
  roomsBooked: 150,
  roomService: true,
  pool: false,
  
  roomsAvail: function () {
   return this.rooms - this.roomsBooked; 
  }
};
var clicked = false;
function info () {
  if (clicked == false){
                clicked = true;
                document.getElementById("name").innerHTML=hotel.name;
                document.getElementById("trooms").innerHTML=hotel.rooms;
                document.getElementById("arooms").innerHTML=hotel.roomsAvail();
            }
            else {
                clicked = false;
                document.getElementById("name").innerHTML="";
                document.getElementById("trooms").innerHTML="";
                document.getElementById("arooms").innerHTML="";
            }
}