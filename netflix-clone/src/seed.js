import firebase from "firebase";

export function seedDatabase(firebase) {
    function getUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const piece = (Math.random() * 16) | 0;
            const elem = c === 'x' ? piece(piece & 0x3) | 0x8;
            return elem.toString(16);
        });
    }
}

firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Tiger King',
    description: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.'
    genre: '18',
    slug: 'tiger-king'
});
firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Amanda Knox',
    description:'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
    genre:'12',
    slug:'amanda-knox'
});
firebase.firestore