import $ from 'jquery';
import JSZip from 'jszip';
import saveAs from 'jszip/vendor/FileSaver';

var zip = new JSZip();

export default class JSzip {
	constructor(){
		//alert("XLSX");
		var imgData = "R0lGODdhBQAFAIACAAAAAP/eACwAAAAABQAFAAACCIwPkWerClIBADs=";
		zip.file("Hello.txt", "这是一个文本文件哦\n");
		var img = zip.folder("images");
		img.file("smile.gif", imgData, {base64: true});

		$("#content").on('click','.J_btn_zip',function(){
			alert("开始下载!");
			zip.generateAsync({type:"blob"})
				.then(function(content) {
					// see FileSaver.js
					saveAs(content, "example.zip");
				});
		});



	}
}
