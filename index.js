function resyze(domarr) {
    domarr.forEach((ele) => {
        const { r_body, r_ele, r_type } = ele;
        requirements({ r_body, r_ele, r_type })
    });
};
export default resyze;

/*
 ##types

   h1
   h2
   h3
   h4
   h5
   normal
   tiny
   ignore
   */

function requirements(data) {
    const { r_body, r_ele, r_type } = data;
    if (r_body.clientWidth === undefined || r_ele === undefined) {
        throw Error('r_body or r_ele not found')

    }
    else if (r_body || r_ele) {

        switch (r_type) {
            case 'normal':
                mainfont({ r_body, r_ele })
                break;
            default:
                errorfunc({ type: 'r_type' })
                break;
        }
    }
    else {
        throw Error('r_body or r_ele not found')
    }
}

function errorfunc(data) {
    const { type } = data;
    if (type === 'r_type') {
        throw Error('r_type is invalid')
    }
}

function mainfont(data) {
    const { r_body, r_ele } = data;

    console.log(r_body.clientWidth);
    r_ele.style.color = `red`
    r_ele.style.fontSize = `34px`;

}

