const fs = require('fs');
const _ = require('underscore');
const axios = require('axios').default;

jest.setTimeout(20000);

const ignored = [
    "https://mega.nz/#!7ZQjmABY!5slFVs_5YB7DphHCrd2m1nzDTiIwpFoLyRKq6WUt6ek",
    "https://www.patreon.com/posts/32912602",
    "https://github.com/erri120"
]

describe('checking all links in the readme', () => {
    var data = fs.readFileSync('README.md');

    const pattern = /(http|https):\/\/[^)]*/g;
    const ds = data.toString();

    const arr = ds.match(pattern);
    let s = new Set(arr);
    const found = Array.from(s.values());

    _.map(found, link => {
        let ignore = false;
        
        if(!ignore) {
            _.map(ignored, i => {
                if(ignore)
                    return;

                if(i != link && !link.startsWith(i))
                    return;
                
                ignore = true;
            });
        }

        if (ignore) {
            console.log(`skipping ${link}, reason: ignored`);
            return;
        }
        
        let c = false;
        jest.retryTimes(3);
        test(`checking link ${link}`, async () => {
            let b = false;
            
            if(b) return;

            expect.assertions(1);

            return axios.head(link).then(res => {
                if(res.status == 200)
                    b = true;
            }).catch(err => {
                const code = err.response.status;
                if(!b && code == 402)
                    b = true;
            }).finally(() => {
                if(!c){
                    expect(b).toBe(true);
                    c = true;
                }
            });
        });
    });
});
