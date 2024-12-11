

class Github{

  constructor(){
    this.client_id = "Ov23lixmTAlIcUp5NuVD";
    this.client_secret = "7ca28f3edac78f09183bc21773af847eeddafd59";
  }

  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client-secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return profile;
    
  }
}