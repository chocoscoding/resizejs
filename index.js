const main_s = 16,
    text_s = 20,
    main_a = 240 * 320,
    sbmax = 3800,
    r_body = document.body;

function spe_w(width) {
    if (width > 230) {
        if (width > 630) {
            if (width > 900) {
                return 270

            }
            return 260

        }
        else {
            return 230

        }


    }

    return width
}

function getnumber(data) {
    const { r_ext } = data;
    if (typeof r_ext === 'number') {
        return r_ext
    }
    else if (typeof r_ext === 'undefined') {
        return 0

    }
    else {
        throw Error('r_ext must be a number')
    }

}

function take_E(TE) {
    if (typeof TE === 'number') {

        if (r_body.clientWidth <= TE) {
            return true;
        }
        return false;

    }
    else {
        throw Error(`TE(take effect) isn't a number. Remove it or add a number value`)
    }
}

function resyze(domarr) {
    domarr.forEach((ele) => {
        const { r_ele, r_type, r_ext, TE, SB } = ele;
        if (TE) {
            if (take_E(TE)) {
                requirements({ r_ele, r_type, r_ext, TE, SB })
            }
        }
        else {

            requirements({ r_ele, r_type, r_ext, SB })
        }
    });
};


function requirements(data) {
    const { r_ele, r_type, r_ext, SB } = data;
    if (r_ele === undefined) {
        if (SB === undefined) {
            throw Error('r_body or r_ele not found')
        }
        else if (SB) {

            switch (r_type) {
                case 'ignore':
                    ignore({ r_ele, r_ext, SB })
                    break;
                case 'normal':
                    normal({ r_ele, r_ext, SB })
                    break;
                case 'tiny':
                    tiny({ r_ele, r_ext, SB })
                    break;
                case 'big':
                    big({ r_ele, r_ext, SB })
                    break;
                default:
                    errorfunc({ type: 'r_type' })
                    break;
            }
        }
    }
    else if (r_ele) {

        switch (r_type) {
            case 'ignore':
                ignore({ r_ele, r_ext })
                break;
            case 'normal':
                normal({ r_ele, r_ext })
                break;
            case 'text':
                text({ r_ele, r_ext })
                break;
            case 'tiny':
                tiny({ r_ele, r_ext })
                break;
            case 'h1':
                h1({ r_ele, r_ext })
                break;
            case 'h2':
                h2({ r_ele, r_ext })
                break;
            case 'h3':
                h3({ r_ele, r_ext })
                break;
            case 'h4':
                h4({ r_ele, r_ext })
                break;
            case 'h5':
                h5({ r_ele, r_ext })
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
    const a = r_body;
    const new_a = a.clientWidth * a.clientHeight;
    const b1 = new_a - main_a;
    const c1a = b1 / new_a;
    const c12 = (c1a * main_s) + main_s;
    return c12;

}


function sbfont(data) {
    const { SB } = data;
    const cw = spe_w(SB.clientWidth)
    const ch = SB.clientHeight > 100 ? 100 : SB.clientHeight;
    const new_a = (ch * cw) * 0.33;
    const c1a = new_a / sbmax;
    const c12 = c1a * 20;
    return c12;

}

function ignore(data) {
    const { r_ele, r_ext, SB } = data;
    if (SB) {
        SB.style.fontSize = `${sbfont({ SB }) + getnumber({ r_ext })}px`;
    }
    else {
        r_ele.style.fontSize = `${mainfont({ r_body }) + getnumber({ r_ext })}px`;
    }
}
function normal(data) {
    const { r_ele, r_ext, SB } = data;
    if (SB) {
        const a1 = sbfont({ SB }) + (sbfont({ SB }) * 0.15)
        SB.style.fontSize = `${a1 + getnumber({ r_ext })}px`;

    }
    else {
        const a1 = mainfont({ r_body }) - (mainfont({ r_body }) * 0.25)
        r_ele.style.fontSize = `${a1 + getnumber({ r_ext })}px`;
    }
}


function text(data) {
    const { r_ele, r_ext } = data;
    const a1 = mainfont({ r_body }) - (mainfont({ r_body }) * 0.13)
    r_ele.style.fontSize = `${a1 + getnumber({ r_ext })}px`;
}



function tiny(data) {
    const { r_ele, r_ext, SB } = data;
    if (SB) {
        const a1 = sbfont({ SB }) - (sbfont({ SB }) * 0.25)
        SB.style.fontSize = `${a1 + getnumber({ r_ext })}px`;
    }
    else {
        const a1 = mainfont({ r_body }) - (mainfont({ r_body }) * 0.25)
        r_ele.style.fontSize = `${a1 + getnumber({ r_ext })}px`;
    }
}
function big(data) {
    const { r_ext, SB } = data;
    const a1 = sbfont({ SB }) + (sbfont({ SB }) * 0.42)
    SB.style.fontSize = `${a1 + getnumber({ r_ext })}px`;

}
function h1(data) {
    const { r_ele, r_ext } = data;
    const a1 = mainfont({ r_body }) + (mainfont({ r_body }) * 0.52)
    r_ele.style.fontSize = `${a1 + getnumber({ r_ext })}px`;
}
function h2(data) {
    const { r_ele, r_ext } = data;
    const a1 = mainfont({ r_body }) + (mainfont({ r_body }) * 0.42)
    r_ele.style.fontSize = `${a1 + getnumber({ r_ext })}px`;
}
function h3(data) {
    const { r_ele, r_ext } = data;
    const a1 = mainfont({ r_body }) + (mainfont({ r_body }) * 0.32)
    r_ele.style.fontSize = `${a1 + getnumber({ r_ext })}px`;
}
function h4(data) {
    const { r_ele, r_ext } = data;
    const a1 = mainfont({ r_body }) + (mainfont({ r_body }) * 0.22)
    r_ele.style.fontSize = `${a1 + getnumber({ r_ext })}px`;
}
function h5(data) {
    const { r_ele, r_ext } = data;

    const a1 = mainfont({ r_body }) + (mainfont({ r_body }) * 0.12)
    r_ele.style.fontSize = `${a1 + getnumber({ r_ext })}px`;
}




export default resyze;