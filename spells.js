function spells(){
    greet.hide();
    goToSpells.hide();

    attackButton = createButton("Go to attack spells");
    attackButton.position(10,100);
    attackButton.mousePressed(attack);

    blockButton = createButton("Go to blocking spells");
    blockButton.position(10,200);
    blockButton.mousePressed(block);

    defenseButton = createButton("Go to defense spells");
    defenseButton.position(10,300);
    defenseButton.mousePressed(defense);
}

function attack(){
    attackButton.hide();
    blockButton.hide();
    defenseButton.hide();

    a1 = createButton("Add Stupefy");
    a1.position(50,100);
    a1.mousePressed(addA1);
}

function block(){
    attackButton.hide();
    blockButton.hide();
    defenseButton.hide();

    b1 = createButton("Add Protego");
    b1.position(50,100);
    b1.mousePressed(addB1);
}

function defense(){
    attackButton.hide();
    blockButton.hide();
    defenseButton.hide();

    d1 = createButton("Add Episkey");
    d1.position(50,100);
    d1.mousePressed(addD1);
}