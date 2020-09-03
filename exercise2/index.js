const getNationality = async () => {
    try {
        let response = await fetch("https://api.github.com/users/ramadhanibnu");
        let data = await response.json();
        console.log(data)
        document.getElementById('profilePicture').src = data.avatar_url;
        document.querySelector('.card-title').innerHTML = data.login;
        document.getElementById('linkPicture').href = data.avatar_url;
        document.getElementById('footer-card').innerHTML = 'created at : '+data.created_at;
        document.getElementById('followers').innerHTML = data.followers;
        document.getElementById('following').innerHTML = data.following;
        document.getElementById('repo').innerHTML = data.public_repos;

    } catch (error) {
        console.log("maaf data yang anda cari tidak ditemukan")
    }
}
getNationality()