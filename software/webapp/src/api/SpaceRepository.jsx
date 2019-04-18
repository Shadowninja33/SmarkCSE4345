import axios from 'axios';

export class SpaceRepository {
    url = "";
    
    getSpaces(query) {
        return new Promise((resolve, reject) => {
            axios.get(this.url, query)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
};