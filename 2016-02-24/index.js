/**
 *  detect web params
 *  suite pc and mobiles
 */
define("./index", function(require, exports, module) {
	var $ = require("jquery/1.7.2/jquery");
	var detector = require("./web-detector");
	console.log(detector);
	var data;
	data = {"clnt": detector.device.name+"/"+detector.device.fullVersion+"|"+
	detector.os.name+"/"+detector.os.fullVersion+"|"+
	detector.browser.name+"/"+detector.browser.fullVersion+"|"+
	detector.engine.name+"/"+detector.engine.fullVersion+
	(detector.browser.compatible?"|c":"")};
	console.log(data);
	$("#detector-des").empty().html(data.clnt);
});