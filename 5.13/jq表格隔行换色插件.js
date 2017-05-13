/**
 * Created by Administrator on 2017-05-13 013.
 */

/**
 * 使用前 应该先引入 jquery
 * this.find('tr:first').css('background',c1); 表示首行颜色
 * this.find('tr:gt(0):odd').css('background',c2); 表示奇数行
 * 使用方法 this.setTableColor('首行颜色','奇数行颜色');
 */

$.fn.setTableColor = function (c1,c2) {
    this.find('tr:first').css('background',c1);
    this.find('tr:gt(0):odd').css('background',c2);
}