/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var pictureSource;
var destinationType;
var app = {
    // Application Constructor
    initialize: function() {
       this.bindEvents();
    },

    bindEvents: function(){
        document.addEventListener('deviceready',this.onDeviceReady,false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
    },
    onPhotoDataSucess:function(imageData){
         var smallImage = document.getElementById('smallImage');
         smallImage.style.display = 'block';
         smallImage.src = "data:image/jpeg;base64," + imageData;
    },

onPhotoURISucess: function(imageURI){
 var largeImage = document.getElementById('largeImage');
 largeImage.style.display = 'block';
 largeImage.src = imageURI;


},

capturePhoto:function(){
  navigator.camera.getPicture(this.onPhotoDataSucess,this.onFail,{quality:50,destinationType: destinationType.DATA_URL});
},

capturePhotoEdit:function(){
    navigator.camera.getPicture(this.onPhotoDataSucess,this.onFail,{quality:20, allowEdit:true  ,destinationType: destinationType.DATA_URL});
},

getPhoto:function(){
    navigator.camera.getPicture(this.onPhotoURISucess,this.onFail,{quality:50,destinationType: destinationType.FILE_URI,sourceType: source});
},
onFail:function(){
    alert("falied  because"+message);
},
};   

app.initialize();