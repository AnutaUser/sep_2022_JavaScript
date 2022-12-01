const userCard = (num) => {
    const card = {
        key: num,
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
    };

    return {
        getCardOptions() {
            return card;
        },

        putCredits(cashPut) {
            if (typeof cashPut !== 'number') {
                throw new Error('NaN');
            } else if (cashPut <= card.transactionLimit) {
                throw new Error('Your balance is not enough');
            } else {
                card.balance += cashPut;
                let history = {
                    operationType: 'Received credits',
                    credits: cashPut,
                    operationTime: new Date(),
                };
                card.historyLogs.push(history);
            }
        },

        takeCredits(cashTake) {
            if (typeof cashTake !== 'number') {
                throw new Error('NaN');
            } else if (cashTake > card.balance) {
                throw new Error('Your balance is not enough');
            } else if (cashTake <= card.transactionLimit) {
                throw new Error('Your balance is not enough');
            } else {
                card.balance -= cashTake;
                let history = {
                    operationType: 'Withdrawal of credits',
                    credits: cashTake,
                    operationTime: new Date(),
                };
                card.historyLogs.push(history);
            }
        },

        transactionLimitChange(cashLimit) {
            if (typeof cashLimit !== 'number') {
                throw new Error('NaN');
            } else {
                card.transactionLimit = cashLimit;
                let history = {
                    operationType: 'Withdrawal of credits',
                    credits: cashLimit,
                    operationTime: new Date(),
                };
                card.historyLogs.push(history);
            }
        },

        transferCredits(cash, receiver) {
            if (typeof cash !== 'number') {
                throw new Error('NaN');
            } else if (cash > card.balance) {
                throw new Error('Your balance is not enough');
            } else if (cash >= card.transactionLimit) {
                throw new Error('Limit');
            } else {
                card.balance -= cash;
                receiver.getCardOptions().balance += cash;
            }

            let history = {
                operationType: `Transfer to card: ${receiver.getCardOptions().key}`,
                credits: cash,
                operationTime: new Date(),
            };
            card.historyLogs.push(history);

            let historyReceiver = {
                operationType: `Transfer from card: ${card.key}`,
                credits: cash,
                operationTime: new Date(),
            };
            receiver.getCardOptions().historyLogs.push(historyReceiver);

        }
    };
}

// const card1 = userCard(1);
// card1.putCredits(200);
// card1.takeCredits(150);
// card1.transactionLimitChange(200);
// console.log(card1.getCardOptions());

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        const key = this.cards.push(userCard().getCardOptions());
        userCard(key).getCardOptions()
    }

    getCardByKey(num) {
        const cardByKey = userCard(num)
        cardByKey.getCardOptions().key = num;
        return cardByKey;
    }
}

const Jon = new UserAccount('Jon');

Jon.addCard();
Jon.addCard();
Jon.addCard();

const card1 = Jon.getCardByKey(1);
const card2 = Jon.getCardByKey(2);
// console.log(card2)

card1.putCredits(500);
card1.transactionLimitChange(800);
card1.transferCredits(300, card2);
card2.takeCredits(350);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());

// class UserAccount {
//     constructor(name, cards) {
//         this.name = name;
//         this.cards = [];
//     }
//
//     addCard() {
//         const userCard = {
//             key: this.cards.length + 1,
//             balance: 100,
//             transactionLimit: 100,
//             historyLogs: [],
//         }
//         if (this.cards.length < 0 || this.cards.length >= 3) {
//             throw new Error('Error');
//         } else {
//             this.cards.push(userCard);
//         }
//         return this.cards;
//     }
//
//     getCardByKey(key) {
//         for (const card of this.cards) {
//             if (card.key === key) {
//                 return {
//                     card,
//
//                     putCredits(cashPut) {
//                         if (typeof cashPut !== 'number') {
//                             throw new Error('NaN');
//                         } else {
//                             card.balance += cashPut;
//                         }
//                         let history = {
//                             operationType: 'Received credits',
//                             credits: cashPut,
//                             operationTime: new Date(),
//                         }
//                         card.historyLogs.push(history);
//                     },
//
//                     takeCredits(cashTake) {
//                         if (typeof cashTake !== 'number') {
//                             throw new Error('NaN');
//                         } else if (cashTake >= card.balance) {
//                             throw new Error('Your balance is not enough');
//                         } else if (cashTake > card.transactionLimit) {
//                             throw new Error('Problem with limit!');
//                         } else {
//                             card.balance -= cashTake;
//                         }
//                         let history = {
//                             operationType: 'Withdrawal of credits',
//                             credits: cashTake,
//                             operationTime: new Date(),
//                         };
//                         card.historyLogs.push(history);
//                     },
//
//                     transactionLimit(cashLimit) {
//                         if (typeof cashLimit !== 'number') {
//                             throw new Error('NaN');
//                         } else {
//                             card.transactionLimit = cashLimit;
//                         }
//                         let history = {
//                             operationType: 'Limit change',
//                             credits: cashLimit,
//                             operationTime: new Date(),
//                         };
//                         card.historyLogs.push(history);
//                     },
//
//                     transferCredits (cash, receiver) {
//                         if (cash > card.balance) {
//                             throw new Error('Not enough money');
//                         } else {
//                             card.balance -= cash;
//                             receiver.card.balance += cash;
//                         }
//                         let history = {
//                             operationType: `Transfer to card: ${receiver.card.key} `,
//                             credits: cash,
//                             operationTime: new Date(),
//                         };
//
//                         let historyReceiver = {
//                             operationType: `Transfer from card: ${card.key}`,
//                             credits: cash,
//                             operationTime: new Date(),
//                         };
//                         card.historyLogs.push(history);
//                         receiver.card.historyLogs.push(historyReceiver);
//                     }
//                 };
//             }
//         }
//     }
// }
//
//
// const user = new UserAccount('Vasya');
// const user1 = new UserAccount('Katya');
// console.log(user);
// console.log(user1);
//
// user.addCard();
// user.addCard();
// user.addCard();
//
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
// // console.log(card2);
//
// card2.putCredits(500);
// // console.log(card2);
//
// card2.takeCredits(100);
// // console.log(card2);
//
// card2.transactionLimit(200);
// // console.log(card2);
//
// // card2.takeCredits(200);
// // console.log(card2);
//
// card2.transferCredits(200, card1);
// console.log(card2);
// console.log(card1);
