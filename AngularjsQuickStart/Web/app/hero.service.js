"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
//Injectable 
var HeroService = (function () {
    //todo:工厂方法注入可以研究下
    function HeroService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.webApiUrl = 'http://localhost:36385/';
        this.addHeroWebApiUrl = this.webApiUrl + "/api/heros/";
        this.updateHeroWebApiUrl = this.webApiUrl + "/api/heros/";
        this.deleteHeroWebApiUrl = this.webApiUrl + "/api/heros/";
    }
    // getHeroes(): Promise<Hero[]> {
    //   return Promise.resolve(HEROES);
    // }
    HeroService.prototype.getHeroesByHttp = function () {
        var _this = this;
        var getApi = this.webApiUrl + "api/heros";
        return this.http.get(getApi)
            .toPromise()
            .then(function (response) { return _this.returnHeros(response); })
            .catch(this.handleError);
    };
    HeroService.prototype.returnHeros = function (response) {
        console.log("return hero response", response.json());
        return response.json();
    };
    // getHeroesSlowly(): Promise<Hero[]> {
    //   return new Promise<Hero[]>(resolve =>setTimeout(resolve, 2000))
    //     .then(() => this.getHeroes());
    // }
    HeroService.prototype.getHero = function (Id) {
        var _this = this;
        return this.getHeroesByHttp()
            .then(function (heroes) { return _this.findHero(heroes, Id); });
    };
    HeroService.prototype.findHero = function (heroes, Id) {
        return heroes.find(function (hero) { return hero.Id === Id; });
    };
    HeroService.prototype.update = function (hero) {
        var url = this.webApiUrl + "/" + hero.Id;
        return this.http.put(this.updateHeroWebApiUrl, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (name) {
        return this.http.post(this.addHeroWebApiUrl, JSON.stringify({ Name: name }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var url = this.deleteHeroWebApiUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error("有一个错误出现", error);
        return Promise.reject(error.message || error);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map