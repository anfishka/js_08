//.container
//.header_block
////.edit .page_name .create
//search_block
//folders
////.name_folder .quantity_msgs
//chat_block
////chat
//////.chat_img

//chat_info
//chat_name .chat_notification_sound .
//.chat_content_preview

//chat_extra_info
//chat_timestamp
//.chat_quantity_msgs


//document.addEventListener("DOMContentLoaded", () => {


  function createElem(
    name,
    place = null
  ) {
    let elem = document.createElement("div");
    elem.classList.add(name);
    if (place) {
      place.appendChild(elem);
    } else {
      document.body.appendChild(elem);
    }

    return elem;
  }

  let main = document.getElementsByClassName("main")[0];
  if (main) {
    document.body.appendChild(main);
  } else {
    console.error("Element with class 'main' not found");
  }

  
  let header_block = createElem(
    "header_block",
    main
  );

  let chat_block = createElem(
    "chat_block",
    main
  );


  let header = createElem(
    "header",
    header_block
  );
 


  let edit = createElem(
    "edit",
    header
  );
  edit.textContent = 'Edit';



  let page_name = createElem(
    "page_name",
    header
  );

  let page_name_txt = createElem(
    "page_name_txt",
    page_name
  );
  page_name_txt.textContent = 'Chats';
 

  let page_name_img = createElem(
    "page_name_img",
    page_name
  );
  page_name_img.style.backgroundImage = 'url("./eagle.png")';


  let create = createElem(
    "create",
    header
  );
  create.style.backgroundImage = 'url("./write.png")';

  
  let search_block = createElem(
    "search_block",
    header_block
  );
  let search_block_icon = createElem(
    "search_block_icon",
    search_block
  ); 
  let search_block_txt = createElem(
    "search_block_txt",
    search_block
  );
  
  search_block_icon.style.backgroundImage = 'url("./search.png")';
  search_block_txt.textContent = 'Search chats';
 
  let folders = createElem(
    "folders",
    header_block
  );

  function createFolder(flag, name_folder_icon_content, name_folder_txt_content, name_folder_quantity_content) {
    let name_folder = createElem("name_folder", folders);

    if (flag === 1) {
        name_folder.style.borderBottom = '0.2rem solid #559fe0';
        name_folder.style.paddingBottom = '10px'
    } else {
        name_folder.style.borderBottom = 'none';
    }

    let name_folder_icon = createElem("name_folder_icon", name_folder);
    name_folder_icon.style.backgroundImage = name_folder_icon_content;

    let name_folder_txt = createElem("name_folder_txt", name_folder);
    name_folder_txt.textContent = name_folder_txt_content;

    let name_folder_quantity = createElem("name_folder_quantity", name_folder);
    name_folder_quantity.textContent = name_folder_quantity_content;
}


 function interfaceChat(chat_img_content, chat_name_content, chat_notification_sound_config, chat_prev_content_photo_content, chat_prev_content_txt_content, chat_prev_content_photo_content_t, chat_timestamp_content, chat_quantity_msgs_content )
{

  let chat = createElem("chat", chat_block);

  let chat_img = createElem("chat_img", chat);
  chat_img.style.backgroundImage = chat_img_content;

  let chat_info = createElem("chat_info", chat);
  let chat_info_innerup = createElem(
    "chat_info_innerup",
    chat_info
  );

  let chat_name = createElem("chat_name", chat_info_innerup);
  chat_name.textContent = chat_name_content;

  let chat_notification_sound = createElem(
    "chat_notification_sound",
    chat_info_innerup
  );

  chat_notification_sound.style.backgroundImage = chat_notification_sound_config;

  let chat_info_innerdown = createElem(
    "chat_info_innerdown",
    chat_info
  );

  let chat_prev_content_photo = createElem(
    "chat_prev_content_photo",
    chat_info_innerdown
  );
  chat_prev_content_photo_content
  chat_prev_content_photo.style.backgroundImage = chat_prev_content_photo_content;
  chat_prev_content_photo.textContent = chat_prev_content_photo_content_t;


  let chat_prev_content_txt = createElem(
    "chat_prev_content_txt",
    chat_info_innerdown
  );

  chat_prev_content_txt.textContent = chat_prev_content_txt_content;

  let chat_extra_info = createElem(
    "chat_extra_info",
    chat
  );
  let chat_timestamp = createElem(
    "chat_timestamp",
    chat_extra_info
  ); 
  chat_timestamp.textContent = chat_timestamp_content;
  
  let chat_quantity_msgs = createElem(
    "chat_quantity_msgs",
    chat_extra_info
  );
  chat_quantity_msgs.textContent = chat_quantity_msgs_content;

}

interfaceChat('url("./cat.jpg")', "Мемы про очень милых котов ", 'url("./on.png")', 'url("./video (2).png")',"Photo",  "","10:20", '113')

interfaceChat('url("./creature.jpg")', "Мемы про strange and really creatures", 'url("./off.png")', 'url("./video (2).png")',"Video",  "", "06:17", '222')

interfaceChat('url("./young_girl.jpg")', "Женские секреты о том как...", 'url("./off.png")', "",  "Женщины всегда ...", 'Лиза: ',"11:40", '5000')


interfaceChat('url("./prog.jpg")', "Котопрогер", 'url("./on.png")', 'url("./video (2).png")',"Photo", '',"02:04", '11')


interfaceChat('url("./receipe.jpg")', "Готовь легко и просто", 'url("./on.png")', "",  "Это блюдо вызвало ...", 'Инна: ',"09:24", '24')

createFolder(0, 'url("./joy.png")', '', '155');
createFolder(0, 'url("./cool.png")', '', '20');
createFolder(0, 'url("./star.png")', '', '70');
createFolder(0, 'url("./dead.png")', '', '430');

createFolder(1, '', 'Мемы', '5340');

