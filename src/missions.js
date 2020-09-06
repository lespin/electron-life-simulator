export const Missions = [{
    name : 'Printing is a simple task',
    subs : [{
        name : 'Reach the printer',
        succes : 'the printer seems to refuse the packet...'
    },{
        name : 'Damn printer!',
        succes : 'the printer was out of paper'
    },{
        name : 'Now we are printing',
        succes : 'the warm noise of the printer suits your electron ears'
    }]
},{
    name : 'The space transmission',
    subs : [{
        name : 'from the home to wide area network',
    },{
        name : 'in the wide area',
    },{
        name : 'reaching the server'
    },{
        name : ''
    }]
},{
    name : 'A Journey in the local Network',
    subs : [{
        name : 'from the home to wide area network',
    },{
        name : 'in the wide area',
    },{
        name : 'reaching the server'
    },{
        name : ''
    }]
}]
console.log({Missions})
export function writeMission( textScreen, level, sublevel, dirs ){
    const { width, height } = textScreen
    const mlevel = Missions[ level - 1 ]

    if ( level ){
        textScreen.printCenter(1,'Mission #'+level)
        textScreen.printCenter(2,'* '+mlevel.name.toUpperCase()+' *', true)
    }
    if ( sublevel ){
        const  msublevel = mlevel.subs[ sublevel - 1 ]
        textScreen.printCenter(5,'Next Hop #'+sublevel)
        textScreen.printCenter(6,msublevel.name, true )
    }
    if ( dirs ){
        textScreen.print(1,8,'routing instructions for hop')
        textScreen.printCenter(10,dirs.join(' . '),true)
    }



}