import info from './info.json'
import $ from 'jquery'

import '../image/image.jpg'

$('#img').attr('src',info.image)
$('.card-title').text(info.city)
$('.card-text').text(info.description)


$('#video_btn').click(()=>{ // show you how to solve arrow func later
    if($('#video').length){
        // video has been loaded, do nothing now.
    }else{
        import(/*webpackChunkName:'videoFunc'*/'./video.js')
        .then((module)=>{
            module.default()
        })
    }
})