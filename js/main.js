function enlarge(picId, picP) {
    $('#'+picId).css({ 'height': '350px' }); $('#'+picP).css({ 'width': 'calc(100% - 60px)', "background-color":"#443857", "color":"white", "padding": "5px 0", "font-size":"20px" });   

}
function shrink(picId, picP) {
    $('#'+picId).css({ 'height': '300px' }); $('#'+picP).css({ 'width': 'calc(100% - 80px)', "background-color":"white", "color":"#337ab7", "padding": "5px 0", "font-size":"14px"   });
}