"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LogService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var LogService = /** @class */ (function () {
    function LogService(http) {
        this.http = http;
        this.username = '';
        this.usertype = '';
        this.token = '';
        this.email = '';
        this.status = false;
        var username = sessionStorage.getItem("username");
        var usertype = sessionStorage.getItem("usertype");
        var token = sessionStorage.getItem("token");
        var email = sessionStorage.getItem("email");
        if (username && usertype) {
            this.status = true;
            this.username = username;
            this.usertype = usertype;
            this.token = token;
            this.email = email;
        }
    }
    LogService.prototype.getStatus = function () {
        return this.status;
    };
    // To Register a User
    LogService.prototype.register = function (obj) {
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("http://localhost:4500/register", obj, this.httpOptions);
    };
    //To check avalailability of mail id and username
    LogService.prototype.check = function (str) {
        return this.http.get("http://localhost:4500/users?username" + str, this.httpOptions);
    };
    // to Login
    LogService.prototype.login = function (email, password) {
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("http://localhost:4500/login", { email: email, password: password }, this.httpOptions);
    };
    LogService.prototype.logout = function () {
        this.token = "";
        this.username = "";
        this.usertype = "";
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("usertype");
        sessionStorage.removeItem("email");
    };
    LogService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], LogService);
    return LogService;
}());
exports.LogService = LogService;
