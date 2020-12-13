class Helper {
    areElementsInList(element, expected) {
        console.log(expected);
        element.each(($el, index) => {
            console.log($el.text())
            expect(expected.includes($el.text()))
        })
    }
}

export default Helper;
