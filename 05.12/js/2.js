/**
 * Created by Administrator on 2017-05-12 012.
 */
window.onload = function () {
    (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.say = function () {
            alert("我叫"+this.name);
        }
        function Student() {}
        Student.prototype = new Person;
        var sp = new Person("ppp");
        sp.say();
        Student.prototype.say = function () {
            alert("student：我叫"+this.name);
        }
    }())
}