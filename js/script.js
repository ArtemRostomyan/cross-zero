const cz_item = document.querySelectorAll('.cross-zero__item');
const clear = document.querySelector('.clear');
const cz_block = document.querySelector('.cross-zero');
const draw = document.querySelector('.draw_none');
let a = 0

let burger = document.querySelector('.burger');
let footer = document.querySelector('.footer');
burger.addEventListener('click', () =>{
   burger.classList.toggle('active');
   footer.classList.toggle('footer-active');
});

function get_index(index){
   return cz_item[index].textContent;
}

function get_class(ap, class_name ='end-horizontally'){
   return cz_item[ap].classList.add(class_name);
}

cz_item.forEach((item, i) =>{
   item.addEventListener('click', () => {
      if(item.textContent == ''){
         a++;
         if(a % 2 === 0){
            item.textContent = 'О'
         } else{
            item.textContent = 'Х'
         }
      }
      function result(){
         if(get_index(0) == get_index(1) && get_index(1)  == get_index(2) && get_index(0) !=='' && get_index(1) !=='' && get_index(2) !==''){
            get_class(0);
            get_class(1);
            get_class(2);
            cz_block.classList.add('end');
         } else if(get_index(3) == get_index(4) && get_index(4)  == get_index(5) && get_index(3) !=='' && get_index(4) !=='' && get_index(5) !==''){
            get_class(3);
            get_class(4);
            get_class(5);
            cz_block.classList.add('end');
         } else if(get_index(6) == get_index(7) && get_index(7)  == get_index(8) && get_index(6) !=='' && get_index(7) !=='' && get_index(8) !==''){
            get_class(6);
            get_class(7);
            get_class(8);
            cz_block.classList.add('end');
         } else if(get_index(0) == get_index(4) && get_index(4)  == get_index(8) && get_index(0) !== '' && get_index(4) !== '' && get_index(8) !== ''){
            get_class(0, 'end-diag_right');
            get_class(4, 'end-diag_right');
            get_class(8, 'end-diag_right');
            cz_block.classList.add('end');
         } else if(get_index(6) == get_index(4) && get_index(4)  == get_index(2) && get_index(6) !== '' && get_index(4) !== '' && get_index(2) !== ''){
            get_class(6, 'end-diag_left');
            get_class(4, 'end-diag_left');
            get_class(2, 'end-diag_left');
            cz_block.classList.add('end');
         } else if(get_index(0) == get_index(3) && get_index(3)  == get_index(6) && get_index(0) !== '' && get_index(3) !== '' && get_index(6) !== ''){
            get_class(0, 'end-vertic');
            get_class(3, 'end-vertic');
            get_class(6, 'end-vertic');
            cz_block.classList.add('end');
         } else if(get_index(1) == get_index(4) && get_index(4)  == get_index(7) && get_index(1) !== '' && get_index(4) !== '' && get_index(7) !== ''){
            get_class(1, 'end-vertic');
            get_class(4, 'end-vertic');
            get_class(7, 'end-vertic');
            cz_block.classList.add('end');
         } else if(get_index(2) == get_index(5) && get_index(5)  == get_index(8) && get_index(2) !== '' && get_index(5) !== '' && get_index(8) !== ''){
            get_class(2, 'end-vertic');
            get_class(5, 'end-vertic');
            get_class(8, 'end-vertic');
            cz_block.classList.add('end');
         } else if(get_index(1) !='' && get_index(2)!= '' && get_index(3)!= '' && get_index(4)!= '' && get_index(5)!= '' && get_index(6)!= '' && get_index(7)!= '' &&  get_index(8) != ''){
            cz_block.classList.add('end');
            draw.classList.add('draw');
         }
      }
      result();
   });
   
});

clear.addEventListener('click', () =>{
   cz_item.forEach(item =>{
      item.textContent = ''
      item.classList.remove('end-horizontally', 'end-diag_left', 'end-diag_right', 'end-vertic');
      cz_block.classList.remove('end');
      draw.classList.remove('draw');
   })
   
})