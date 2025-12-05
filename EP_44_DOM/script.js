// function imageCall(image) {
//   document.body.children[4].src =
//     `${image}`
// }


// let index = 0;
// const image = [
//   'https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg',
//   'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
//   'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
// ];

// setTimeout(() => {
//   imageCall(image[index]);
//   index = (index + 1) % image.length;
// }, 2000);



let index = 0;

const images = [
  'https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg',
  'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
  'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg'
];

// Show first image immediately
document.getElementById("slider").src = images[index];

// Change image every 2 seconds
setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slider").src = images[index];
}, 500);