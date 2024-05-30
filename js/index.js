import Dom from "/api/wjst/dom";
import Http from '/api/wjst/http';

if (Http.headers['token']){
    Dom.element('icon_profile').href = '/profile';
}
