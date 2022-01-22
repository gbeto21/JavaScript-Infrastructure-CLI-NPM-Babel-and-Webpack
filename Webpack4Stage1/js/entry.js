import info from './info.json'

import $ from 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../image/webpack-logo.png'

import '../css/style.css'

$('#logo').attr('src',info.logo)
$('#title').text(info.title)





