const accountId = 144553
let accountEmail = "Zaiprakashkumar@gmail.com"
var accountpassword = "1234"
accountCity  = "Delhi"
let accountstate;

//accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountpassword = "212121"
accountcity = "Mp"

console.log(accountId);

/*
prefer not use var
because of issue in block scope and functional
*/ 
console.table([accountId, accountEmail, accountpassword, accountCity,accountstate])

/*

Values      │
├─────────┼─────────────┤
│ 0       │ 144553      │
│ 1       │ 'hc@hc.com' │
│ 2       │ '212121'    │
│ 3       │ 'Delhi'     │
│ 4       │ undefined   │
└─────────┴─────────────
*/