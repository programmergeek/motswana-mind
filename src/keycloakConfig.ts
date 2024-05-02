import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: 'http://10.0.18.86:8081',
    realm: 'motswana-mind',
    clientId: 'motswana-mind',
});

export default keycloak;