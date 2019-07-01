
class Organization{
    constructor(orgname){
        this.orgname = orgname;
    }

    orgName(){
        return this.orgname;
    }
}

var org = new Organization("Google");

module.exports = {
    org
}