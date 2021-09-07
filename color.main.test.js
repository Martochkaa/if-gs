/**
 *@jest-environment jsdom
 */

 describe ('check out change text color after the click', () => {
     let colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

     document.body.innerHTML = `
     <p id="text1">text</p>
     <p id="text2">text</p>
     <p id="text3">text</p> 
    `
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    let text3 = document.getElementById('text3');
     
    let k=0;
    let j=0;
    let z=0;

    test('exept color in text1 is magenta', () => {
        text1.click();
        document.getElementById('text1').style.color = colors[k];
        k++;
        let color = text1.style.color;
        expect(color).toBe('magenta');
    })

    test('exept color in text1 is cyan', () => {
        text1.click();
        document.getElementById('text1').style.color = colors[k];
        k++;
        let color = text1.style.color;
        expect(color).toBe('cyan');
    })

    test('exept color in text1 is firebrick', () => {
        text1.click();
        document.getElementById('text1').style.color = colors[k];
        k++;
        let color = text1.style.color;
        expect(color).toBe('firebrick');
    })

    test('exept color in text1 is springgreen', () => {
        text1.click();
        document.getElementById('text1').style.color = colors[k];
        k++;
        let color = text1.style.color;
        expect(color).toBe('springgreen');
    })

    test('exept color in text1 is skyblue', () => {
        text1.click();
        document.getElementById('text1').style.color = colors[k];
        k++;
        let color = text1.style.color;
        expect(color).toBe('skyblue');
    })





    test('exept color in text2 is magenta', () => {
        text2.click();
        document.getElementById('text2').style.color = colors[j];
        j++;
        let color = text2.style.color;
        expect(color).toBe('magenta');
    })

    test('exept color in text2 is cyan', () => {
        text2.click();
        document.getElementById('text2').style.color = colors[j];
        j++;
        let color = text2.style.color;
        expect(color).toBe('cyan');
    })

    test('exept color in text2 is firebrick', () => {
        text2.click();
        document.getElementById('text2').style.color = colors[j];
        j++;
        let color = text2.style.color;
        expect(color).toBe('firebrick');
    })

    test('exept color in text2 is springgreen', () => {
        text2.click();
        document.getElementById('text2').style.color = colors[j];
        j++;
        let color = text2.style.color;
        expect(color).toBe('springgreen');
    })

    test('exept color in text2 is skyblue', () => {
        text2.click();
        document.getElementById('text2').style.color = colors[j];
        j++;
        let color = text2.style.color;
        expect(color).toBe('skyblue');
    })






    test('exept color in text3 is magenta', () => {
        text3.click();
        document.getElementById('text3').style.color = colors[z];
        z++;
        let color = text3.style.color;
        expect(color).toBe('magenta');
    })

    test('exept color in text3 is cyan', () => {
        text3.click();
        document.getElementById('text3').style.color = colors[z];
        z++;
        let color = text3.style.color;
        expect(color).toBe('cyan');
    })

    test('exept color in text3 is firebrick', () => {
        text3.click();
        document.getElementById('text3').style.color = colors[z];
        z++;
        let color = text3.style.color;
        expect(color).toBe('firebrick');
    })

    test('exept color in text3 is springgreen', () => {
        text3.click();
        document.getElementById('text3').style.color = colors[z];
        z++;
        let color = text3.style.color;
        expect(color).toBe('springgreen');
    })

    test('exept color in text3 is skyblue', () => {
        text3.click();
        document.getElementById('text3').style.color = colors[z];
        z++;
        let color = text3.style.color;
        expect(color).toBe('skyblue');
    })
 })