$(document).ready(function() {

    /*Todo:
        Make clear setinterval for spawncursor and setInterval for everytime Hoe_A or Shovel_A ect changes.


        Make Furnaces that turn items into different items over time. 
        Make 
            Name:Pig Pen 
            Cost: 200 wood
            Effect: +1 Pig Holding Area. 2 required for mating.

        Capture Pig requires... 100 Pumpkins

        Options above Items that apply to the items
        Convert to Exp
        Convert to Money


    */
    ww = $(window).width();
    wh = $(window).height();
    $('.Screen').css({
        width: ww,
        height: wh
    });

    $(".Pure_Coal_Buy").click(function() {


        if (Coal_A >= 5) {
            Coal_A -= 5;
            CreateCenter("Pure Coal", "Standard", 1)
        }


    })
    $(".Pure_Silver_Buy").click(function() {


        if (Silver_A >= 5) {
            Silver_A -= 5;
            CreateCenter("Pure Silver", "Standard", 1)
        }


    })


    setInterval(function() {
        CursorUpdate()
    }, 50)
    $('.Farm.Button').click(function() {
        for (i = 1; i <= Farm_Per_Click; i++) {
            Farm();
        }
    })
    $('.Mine.Button').click(function() {
        for (i = 1; i <= Mine_Per_Click; i++) {
            Mine();
        }
    })
    $('.Floriculture.Button').click(function() {
        for (i = 1; i <= Floriculture_Per_Click; i++) {
            Floriculture();
        }
    })


    function CursorUpdate() {
        fb = $('.Farm.Button').position();
        fbw = $('.Farm.Button').width();
        fbh = $('.Farm.Button').height();
        $('.Farm.Cursor').animate({
            top: fb.top + fbh / 2,
            left: fb.left + fbw / 2
        }, 1000, function() {
            $('.Button.Farm').click();
            $(this).remove();
        })
        d = $('.Dig.Button').position();
        dw = $('.Dig.Button').width();
        dh = $('.Dig.Button').height();
        $('.Dig.Cursor').animate({
            top: d.top + dh / 2,
            left: d.left + dw / 2
        }, 1500, function() {
            $('.Button.Dig').click();
            $(this).remove();
        })
        m = $('.Mine.Button').position();
        mw = $('.Mine.Button').width();
        mh = $('.Mine.Button').height();
        $('.Mine.Cursor').animate({
            top: m.top + mh / 2,
            left: m.left + mw / 2
        }, 1500, function() {
            $('.Button.Mine').click();
            $(this).remove();
        })
        f = $('.Floriculture.Button').position();
        fw = $('.Floriculture.Button').width();
        fh = $('.Floriculture.Button').height();
        $('.Floriculture.Cursor').animate({
            top: f.top + fh / 2,
            left: f.left + fw / 2
        }, 1500, function() {
            $('.Button.Floriculture').click();
            $(this).remove();
        })
    }
    toggle = 0;
    $('.Button').click(function() {
        $this = this;
        $(this).css({
            backgroundImage: "url('img/Option Background/Black Option.png')",
            color: "red"
        })

    })
    setInterval(function() {
        $('.Button').css({
            backgroundImage: "url('img/Option Background/Option Blue.png')",
            color: "white"

        })
    }, 300);
    setInterval(function() {

        if (toggle == 0) {
            $('.Big').css({
                background: 'white',
                color: 'royalblue'
            })
            $('.Huge').css({
                background: 'purple',
                color: 'white'
            })
            $('.Gigantic').css({
                background: 'black',
                color: 'red'
            })
            toggle++;
        } else {

            $('.Big').css({
                background: 'royalblue',
                color: 'white'
            })
            $('.Huge').css({
                background: 'white',
                color: 'purple'
            })
            $('.Gigantic').css({
                background: 'red',
                color: 'black'
            })
            toggle = 0;
        }
    }, 250)
    Pickaxe_A = 1;
    Hoe_A = 1;
    Watering_Can_A = 1;
    Shovel_A = 1;
    Dirt_A = 0;
    Rich_Soil_A = 0;
    Very_Rich_Soil_A = 0;
    Extremly_rich_soil_A = 0;
    Packed_Snow_A = 0;
    Ice_A = 0;
    Hardened_Ice_A = 0;
    Compressed_Ice_A = 0;
    Wood_A = 0;
    Bamboo_A = 0;
    Valunite_A = 0;
    Dark_Valunite_A = 0;
    Sandstone_A = 0;
    Sand_A = 0;
    Packed_Sand_A = 0;
    Extra_Coins_A = 0;
    Bonus_Coins_A = 0;
    Boxes_A = 0;
    Old_Box_A = 0;
    Unknown_A = 0;
    Orange_Box_A = 0;
    Green_Box_A = 0;
    Cyan_Box_A = 0;
    Red_Box_A = 0;
    Magenta_Box_A = 0;
    Purple_Box_A = 0;
    Blue_Box_A = 0;
    Blue_Key_A = 0;
    Red_Key_A = 0;
    Green_Key_A = 0;
    Yellow_Key_A = 0;
    Steel_A = 0;
    Refined_Steel_A = 0;
    Mystery_Steel_A = 0;
    Coal_A = 0;
    Pure_Coal_A = 0;
    Silver_A = 0;
    Pure_Silver_A = 0;
    Calcite_A = 0;
    Gold_A = 0;
    Pure_Gold_T = 0;
    Pixie_Dust_A = 0;
    Aquamarine_A = 0;
    Diamond_A = 0;
    Pure_Diamond_T = 0;
    Ruby_A = 0;
    Pure_Ruby_A = 0;
    Emerald_A = 0;
    Pure_Emerald_T = 0;
    Fossils_A = 0;
    Stone_A = 0;
    Stone_Bricks_A = 0;
    Ugly_Bricks_A = 0;
    Brick_A = 0;
    Forest_Crystal_A = 0;
    Blood_Crystal_A = 0;
    Sand_Crystal_A = 0;
    Ice_Crystal_A = 0;
    Snow_Crystal_A = 0;
    Dirt_T = 0;
    Rich_Soil_T = 0;
    Very_Rich_Soil_T = 0;
    Extremly_rich_soil_T = 0;
    Packed_Snow_T = 0;
    Ice_T = 0;

    Giant_Cherry_A = 0;
    Grapes_A = 0;
    Green_Bean_A = 0;
    Lemon_A = 0;
    Pear_A = 0;
    Potato_A = 0;
    Radish_A = 0;
    Rice_A = 0;
    Rose_A = 0;
    Strawberries_A = 0;
    Sunflower_A = 0;
    Tomato_A = 0;
    Violet_A = 0;
    Watermelon_A = 0;
    Wheat_A = 0;
    Yellow_Berry_A = 0;
    Corn_A = 0;
    Dates_A = 0;
    Eggplant_A = 0;
    Gaint_Strawberry_A = 0;

    Giant_Cherry_T = 0;
    Grapes_T = 0;
    Green_Bean_T = 0;
    Lemon_T = 0;
    Pear_T = 0;
    Potato_T = 0;
    Radish_T = 0;
    Rice_T = 0;
    Rose_T = 0;
    Strawberries_T = 0;
    Sunflower_T = 0;
    Tomato_T = 0;
    Violet_T = 0;
    Watermelon_T = 0;
    Wheat_T = 0;
    Yellow_Berry_T = 0;
    Corn_T = 0;
    Dates_T = 0;
    Eggplant_T = 0;
    Gaint_Strawberry_T = 0;

    Hardened_Ice_T = 0;
    Compressed_Ice_T = 0;
    Wood_T = 0;
    Bamboo_T = 0;
    Valunite_T = 0;
    Dark_Valunite_T = 0;
    Sandstone_T = 0;
    Sand_T = 0;
    Packed_Sand_T = 0;
    Extra_Coins_T = 0;
    Bonus_Coins_T = 0;
    Boxes_T = 0;
    Old_Box_T = 0;
    Unknown_T = 0;
    Orange_Box_T = 0;
    Green_Box_T = 0;
    Cyan_Box_T = 0;
    Red_Box_T = 0;
    Magenta_Box_T = 0;
    Purple_Box_T = 0;
    Blue_Box_T = 0;
    Blue_Key_T = 0;
    Red_Key_T = 0;
    Green_Key_T = 0;
    Yellow_Key_T = 0;
    Steel_T = 0;
    Refined_Steel_T = 0;
    Mystery_Steel_T = 0;
    Coal_T = 0;
    Pure_Coal_T = 0;
    Silver_T = 0;
    Pure_Silver_T = 0;
    Calcite_T = 0;
    Gold_T = 0;
    Pure_Gold_T = 0;
    Pixie_Dust_T = 0;
    Aquamarine_T = 0;
    Diamond_T = 0;
    Pure_Diamond_T = 0;
    Ruby_T = 0;
    Pure_Ruby_T = 0;
    Emerald_T = 0;
    Pure_Emerald_T = 0;
    Fossils_T = 0;
    Stone_T = 0;
    Stone_Bricks_T = 0;
    Ugly_Bricks_T = 0;
    Brick_T = 0;
    Forest_Crystal_T = 0;
    Blood_Crystal_T = 0;
    Sand_Crystal_T = 0;
    Ice_Crystal_T = 0;
    Snow_Crystal_T = 0;
    WoodShovel = 0;
    Dirt_Amount = 0;
    Dirt_Speed = 1000;
    setInterval(function() {
        $('.Dirt_Bar').width()
    }, 100);
    Fade_Speed = 100;
    Update_Numbers_Speed = 100;
    setInterval(function() {

        $('.R').each(function(i, e) {
            if ($(e).width() < 1) {

                $(e).remove();
            }

            $(e).css({
                width: $(e).width() / 1.1,
                height: $(e).height() / 1.1,
                fontSize: parseFloat($(e).css('font-size')) /
                    1.1,
                marginTop: parseFloat($(e).css('margin-top')) / 1.1,

            })
        });

    }, Fade_Speed);
    setInterval(function() {
        HideNotFound();
        UpdateAmount();


    }, Update_Numbers_Speed);

    Mine_Speed = 100;
    Farm_Speed = 100;
    setInterval(function() {
        v = $('.Input').val();
        if (v == "10m") {
            $('.Input').val("");
            for (i = 1; i <= 10; i++) {
                Mine();
            }

        }
        if (v == "100m") {
            $('.Input').val("");
            for (i = 1; i <= 100; i++) {
                Mine();
            }

        }
        if (v == "1000m") {
            $('.Input').val("");
            for (i = 1; i <= 1000; i++) {
                Mine();
            }

        }

    }, 10);
    Floriculture_Speed = 100;

    showing_inventory = 0;
    document.onkeypress = function(e) { // doesn't have to be "e"

        if (e.keyCode == 96) {
            if (showing_inventory == 0) {
                $('.Items,.CloseWindow').show();
                showing_inventory = 1;
            } else {
                showing_inventory = 0;
                $('.Items,.CloseWindow').hide();
            }

        };
        if (e.keyCode == 13) {
            I = $('.Input').val();
            if (I == "Mine") {
                $(".Mine").click();
            }
            for (i = 1; i < 1e12; i = i * 10) {
                if (I == "Pure Coal " + sn(i, 1)) {
                    $(".Pure_Coal_Buy_" + sn(i, 1)).click()
                }

            }
            for (i = 1; i < 1e12; i = i * 10) {
                if (I == "Pure Silver " + sn(i, 1)) {
                    $(".Pure_Silver_Buy_" + sn(i, 1)).click();
                }
            }
            for (i = 1; i < 1e12; i = i * 10) {
                if (I == "Pure Gold " + sn(i, 1)) {
                    $(".Pure_Gold_Buy_" + sn(i, 1)).click();
                }
            }
            for (i = 1; i < 1e12; i = i * 10) {
                if (I == "Pure Ruby " + sn(i, 1)) {
                    $(".Pure_Ruby_Buy_" + sn(i, 1)).click();
                }
            }
            for (i = 1; i < 1e12; i = i * 10) {
                if (I == "Pure Diamond " + sn(i, 1)) {
                    $(".Pure_Diamond_Buy_" + sn(i, 1)).click();
                }
            }
            for (i = 1; i < 1e12; i = i * 10) {
                if (I == "Pure Emerald " + sn(i, 1)) {
                    $(".Pure_Emerald_Buy_" + sn(i, 1)).click();
                }
            }
            for (i = 1; i < 1e12; i = i * 10) {
                if (I == "Pickaxe " + sn(i, 1)) {
                    $(".Pickaxe_Buy_" + sn(i, 1)).click();
                }
            }
            for (i = 1; i < 1e12; i = i * 10) {
                if (I == "Hoe " + sn(i, 1)) {
                    $(".Hoe_Buy_" + sn(i, 1)).click();
                }
            }
            for (i = 1; i < 1e12; i = i * 10) {
                if (I == "Shovel " + sn(i, 1)) {
                    $(".Shovel_Buy_" + sn(i, 1)).click();
                }
            }
            for (i = 1; i < 1e12; i = i * 10) {
                if (I == "Watering Can " + sn(i, 1)) {
                    $(".Watering_Can_Buy_" + sn(i, 1)).click();
                }
            }
            for (i = 1; i < 1e12; i = i * 10) {
                if (I == "Shovel " + sn(i, 1)) {
                    $(".Shovel_Buy_" + sn(i, 1)).click();
                }
            }


            console.log(I)


        }

    };
    Dirt_C = 0.1;
    Coal_C = 0.01;
    Silver_C = 0.003;
    Calcite_C = 0.001;
    Gold_C = 0.0005;
    Pixie_Dust_C = 0.0003;
    Aquamarine_C = 0.002;
    Diamond_C = 0.0001;
    Ruby_C = 0.00005;
    Emerald_C = 0.00002;
    Fossils_C = 0.00001;

    Giant_Cherry_C = 0.01;
    Grapes_C = 0.01;
    Green_Bean_C = 0.01;
    Lemon_C = 0.01;
    Pear_C = 0.01;
    Potato_C = 0.01;
    Radish_C = 0.01;
    Rice_C = 0.01;
    Rose_C = 0.01;
    Strawberries_C = 0.01;
    Sunflower_C = 0.01;
    Tomato_C = 0.01;
    Violet_C = 0.01;
    Watermelon_C = 0.01;
    Wheat_C = 0.01;
    Yellow_Berry_C = 0.01;
    Corn_C = 0.01;
    Dates_C = 0.01;
    Eggplant_C = 0.01;
    Gaint_Strawberry_C = 0.01;
    Blood_Crystal_C = 0.00001;
    $('.CloseWindow').click(function() {
        showing_inventory = 0;

        $('.Items').hide();
        $(this).hide();
    });

    function Create(Name, Item_Class, Amount) {
        Name_ = Name.replace(/\s+/g, "_");
        if (Math.random() < window[Name_ + '_C']) {
            window[Name_ + '_A'] += Amount;
            window[Name_ + '_T'] += Amount;
            mr1 = Math.random();
            mr2 = Math.random();
            $('<img class="R" src="img/' + Name + '.png">').css({
                'left': mr1 * (ww / 1.2),
                'top': mr2 * (wh / 1.2),
                width: 125,
                height: 125
            }).appendTo('.Screen');
            $('<div class="R ItemA ' + Item_Class + '">' + Amount + '</div>').css({
                'left': mr1 * (ww / 1.2),
                'top': mr2 * (wh / 1.2),
                width: 125,
                marginTop: 125,
                fontSize: 25,
            }).appendTo('.Screen')
        }
    }

    function CreateCenter(Name, Item_Class, Amount) {
        Name_ = Name.replace(/\s+/g, "_");

        window[Name_ + '_A'] += Amount;
        window[Name_ + '_T'] += Amount;
        mr1 = Math.random();
        mr2 = Math.random();
        $('<img class="R" src="img/' + Name + '.png">').css({
            'left': -63 + (ww / 2),
            'top': -63 + (wh / 2),
            width: 125,
            height: 125,
            zIndex: 121,
        }).appendTo('.Screen');
        $('<div class="R ItemA ' + Item_Class + '">' + Amount + '</div>').css({
            'left': -63 + (ww / 2),
            'top': -63 + (wh / 2),
            width: 125,
            marginTop: 125,
            fontSize: 25,
            zIndex: 121,
        }).appendTo('.Screen')

    }

    function CreateF(Name, Item_Class, Amount) {
        Name_ = Name.replace(/\s+/g, "_");
        if (Math.random() < window[Name_ + '_C']) {
            window[Name_ + '_A'] += Amount;
            window[Name_ + '_T'] += Amount;

            mr1 = Math.random();
            mr2 = Math.random();

            $('<img class="R" src="img/Crops/' + Name + ' Complete.png">').css({
                'left': mr1 * (ww / 1.2),
                'top': mr2 * (wh / 1.2),
                width: 125,
                height: 125
            }).appendTo('.Screen');
            $('<div class="R ItemA ' + Item_Class + '">' + Amount + '</div>').css({
                'left': mr1 * (ww / 1.2),
                'top': mr2 * (wh / 1.2),
                width: 125,
                marginTop: 125,
                fontSize: 25,
            }).appendTo('.Screen')
        }
    }

    function Mine() {

        Mine_Item_Amount = 1 + Pickaxe_A;
        DetermineAmount(Mine_Item_Amount);
        Create('Coal', ic, a);
        DetermineAmount(Mine_Item_Amount);
        Create('Silver', ic, a);
        DetermineAmount(Mine_Item_Amount);
        Create('Calcite', ic, a);
        DetermineAmount(Mine_Item_Amount);
        Create('Gold', ic, a);
        DetermineAmount(Mine_Item_Amount);
        Create('Pixie Dust', ic, a);
        DetermineAmount(Mine_Item_Amount);
        Create('Aquamarine', ic, a);
        DetermineAmount(Mine_Item_Amount);
        Create('Diamond', ic, a);
        DetermineAmount(Mine_Item_Amount);
        Create('Ruby', ic, a);
        DetermineAmount(Mine_Item_Amount);
        Create('Emerald', ic, a);
        DetermineAmount(Mine_Item_Amount);
        Create('Fossils', ic, a);
    }
    Farm_Item_Amount = 1 + Hoe_A;

    Floriculture_Item_Amount = 1 + Watering_Can_A;
    ic = "Standard";
    a = 0;

    function DetermineAmount(Multiplier) {
        mr = Math.random();
        if (mr > .95) {
            ic = "Gigantic";
            a = Multiplier * 100
        } else if (mr > .85) {
            ic = "Huge";
            a = Multiplier * 25
        } else if (mr > .60) {
            ic = "Big";
            a = Multiplier * 5
        } else {
            ic = "Standard";
            a = Multiplier;
        }
    }

    function Floriculture() {
        DetermineAmount(Floriculture_Item_Amount);
        CreateF('Sunflower', ic, a);

        DetermineAmount(Floriculture_Item_Amount);
        CreateF('Rose', ic, a);
        DetermineAmount(Floriculture_Item_Amount);
        CreateF('Violet', ic, a);
    }

    function Farm() {
        DetermineAmount(Farm_Item_Amount);
        CreateF('Giant Cherry', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Grapes', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Green Bean', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Lemon', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Pear', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Potato', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Radish', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Rice', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Strawberries', ic, a);

        DetermineAmount(Farm_Item_Amount);
        CreateF('Tomato', ic, a);

        DetermineAmount(Farm_Item_Amount);
        CreateF('Watermelon', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Wheat', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Yellow Berry', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Corn', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Dates', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Eggplant', ic, a);
        DetermineAmount(Farm_Item_Amount);
        CreateF('Gaint Strawberry', ic, a);

    }


    function UpdateAmount() {
        $('.Dirt').find('.Amount').html(sn(Dirt_A, 1))
        $('.Rich_Soil').find('.Amount').html(sn(Rich_Soil_A, 1))
        $('.Very_Rich_Soil').find('.Amount').html(sn(Very_Rich_Soil_A, 1))
        $('.Extremly_rich_soil').find('.Amount').html(sn(Extremly_rich_soil_A, 1))
        $('.Packed_Snow').find('.Amount').html(sn(Packed_Snow_A, 1))
        $('.Ice').find('.Amount').html(sn(Ice_A, 1))
        $('.Hardened_Ice').find('.Amount').html(sn(Hardened_Ice_A, 1))
        $('.Compressed_Ice').find('.Amount').html(sn(Compressed_Ice_A, 1))
        $('.Wood').find('.Amount').html(sn(Wood_A, 1))
        $('.Bamboo').find('.Amount').html(sn(Bamboo_A, 1))
        $('.Valunite').find('.Amount').html(sn(Valunite_A, 1))
        $('.Dark_Valunite').find('.Amount').html(sn(Dark_Valunite_A, 1))
        $('.Sandstone').find('.Amount').html(sn(Sandstone_A, 1))
        $('.Sand').find('.Amount').html(sn(Sand_A, 1))
        $('.Packed_Sand').find('.Amount').html(sn(Packed_Sand_A, 1))
        $('.Extra_Coins').find('.Amount').html(sn(Extra_Coins_A, 1))
        $('.Bonus_Coins').find('.Amount').html(sn(Bonus_Coins_A, 1))
        $('.Boxes').find('.Amount').html(sn(Boxes_A, 1))
        $('.Old_Box').find('.Amount').html(sn(Old_Box_A, 1))
        $('.Unknown').find('.Amount').html(sn(Unknown_A, 1))
        $('.Orange_Box').find('.Amount').html(sn(Orange_Box_A, 1))
        $('.Green_Box').find('.Amount').html(sn(Green_Box_A, 1))
        $('.Cyan_Box').find('.Amount').html(sn(Cyan_Box_A, 1))
        $('.Red_Box').find('.Amount').html(sn(Red_Box_A, 1))
        $('.Magenta_Box').find('.Amount').html(sn(Magenta_Box_A, 1))
        $('.Purple_Box').find('.Amount').html(sn(Purple_Box_A, 1))
        $('.Blue_Box').find('.Amount').html(sn(Blue_Box_A, 1))
        $('.Blue_Key').find('.Amount').html(sn(Blue_Key_A, 1))
        $('.Red_Key').find('.Amount').html(sn(Red_Key_A, 1))
        $('.Green_Key').find('.Amount').html(sn(Green_Key_A, 1))
        $('.Yellow_Key').find('.Amount').html(sn(Yellow_Key_A, 1))
        $('.Steel').find('.Amount').html(sn(Steel_A, 1))
        $('.Refined_Steel').find('.Amount').html(sn(Refined_Steel_A, 1))
        $('.Mystery_Steel').find('.Amount').html(sn(Mystery_Steel_A, 1))
        $('.Coal').find('.Amount').html(sn(Coal_A, 1))
        $('.Pure_Coal').find('.Amount').html(sn(Pure_Coal_A, 1))
        $('.Pure_Silver').find('.Amount').html(sn(Pure_Silver_A, 1))
        $('.Silver').find('.Amount').html(sn(Silver_A, 1))
        $('.Calcite').find('.Amount').html(sn(Calcite_A, 1))
        $('.Gold').find('.Amount').html(sn(Gold_A, 1))
        $('.Pixie_Dust').find('.Amount').html(sn(Pixie_Dust_A, 1))
        $('.Aquamarine').find('.Amount').html(sn(Aquamarine_A, 1))
        $('.Diamond').find('.Amount').html(sn(Diamond_A, 1))
        $('.Ruby').find('.Amount').html(sn(Ruby_A, 1))
        $('.Emerald').find('.Amount').html(sn(Emerald_A, 1))
        $('.Fossils').find('.Amount').html(sn(Fossils_A, 1))
        $('.Stone').find('.Amount').html(sn(Stone_A, 1))
        $('.Stone_Bricks').find('.Amount').html(sn(Stone_Bricks_A, 1))
        $('.Ugly_Bricks').find('.Amount').html(sn(Ugly_Bricks_A, 1))
        $('.Brick').find('.Amount').html(sn(Brick_A, 1))
        $('.Forest_Crystal').find('.Amount').html(sn(Forest_Crystal_A, 1))
        $('.Blood_Crystal').find('.Amount').html(sn(Blood_Crystal_A, 1))
        $('.Sand_Crystal').find('.Amount').html(sn(Sand_Crystal_A, 1))
        $('.Ice_Crystal').find('.Amount').html(sn(Ice_Crystal_A, 1))
        $('.Snow_Crystal').find('.Amount').html(sn(Snow_Crystal_A, 1))
        $('.Giant_Cherry').find('.Amount').html(sn(Giant_Cherry_A, 1))
        $('.Grapes').find('.Amount').html(sn(Grapes_A, 1))
        $('.Green_Bean').find('.Amount').html(sn(Green_Bean_A, 1))
        $('.Lemon').find('.Amount').html(sn(Lemon_A, 1))
        $('.Pear').find('.Amount').html(sn(Pear_A, 1))
        $('.Potato').find('.Amount').html(sn(Potato_A, 1))
        $('.Radish').find('.Amount').html(sn(Radish_A, 1))
        $('.Rice').find('.Amount').html(sn(Rice_A, 1))
        $('.Rose').find('.Amount').html(sn(Rose_A, 1))
        $('.Strawberries').find('.Amount').html(sn(Strawberries_A, 1))
        $('.Sunflower').find('.Amount').html(sn(Sunflower_A, 1))
        $('.Tomato').find('.Amount').html(sn(Tomato_A, 1))
        $('.Violet').find('.Amount').html(sn(Violet_A, 1))
        $('.Watermelon').find('.Amount').html(sn(Watermelon_A, 1))
        $('.Wheat').find('.Amount').html(sn(Wheat_A, 1))
        $('.Yellow_Berry').find('.Amount').html(sn(Yellow_Berry_A, 1))
        $('.Corn').find('.Amount').html(sn(Corn_A, 1))
        $('.Dates').find('.Amount').html(sn(Dates_A, 1))
        $('.Eggplant').find('.Amount').html(sn(Eggplant_A, 1))
        $('.Gaint_Strawberry').find('.Amount').html(sn(Gaint_Strawberry_A, 1))
    }

    function HorS(Name) {
        if (window[Name + '_T'] == 0) {
            $('.' + Name).hide();
        } else {
            $('.' + Name).show();
        }
    };

    function HideNotFound() {
        HorS('Dirt');
        HorS('Rich_Soil');
        HorS('Very_Rich_Soil');
        HorS('Extremly_rich_soil');
        HorS('Packed_Snow');
        HorS('Ice');
        HorS('Hardened_Ice');
        HorS('Compressed_Ice');
        HorS('Wood');
        HorS('Bamboo');
        HorS('Valunite');
        HorS('Dark_Valunite');
        HorS('Sandstone');
        HorS('Sand');
        HorS('Packed_Sand');
        HorS('Extra_Coins');
        HorS('Bonus_Coins');
        HorS('Boxes');
        HorS('Old_Box');
        HorS('Unknown');
        HorS('Orange_Box');
        HorS('Green_Box');
        HorS('Cyan_Box');
        HorS('Red_Box');
        HorS('Magenta_Box');
        HorS('Purple_Box');
        HorS('Blue_Box');
        HorS('Blue_Key');
        HorS('Red_Key');
        HorS('Green_Key');
        HorS('Yellow_Key');
        HorS('Steel');
        HorS('Refined_Steel');
        HorS('Mystery_Steel');
        HorS('Coal');
        HorS('Silver');
        HorS('Calcite');
        HorS('Gold');
        HorS('Pixie_Dust');
        HorS('Aquamarine');
        HorS('Diamond');
        HorS('Ruby');
        HorS('Emerald');
        HorS('Fossils');
        HorS('Stone');
        HorS('Stone_Bricks');
        HorS('Ugly_Bricks');
        HorS('Brick');
        HorS('Forest_Crystal');
        HorS('Blood_Crystal');
        HorS('Sand_Crystal');
        HorS('Ice_Crystal');
        HorS('Snow_Crystal');
        HorS('Giant_Cherry');
        HorS('Grapes');
        HorS('Green_Bean');
        HorS('Lemon');
        HorS('Pear');
        HorS('Potato');
        HorS('Radish');
        HorS('Rice');
        HorS('Rose');
        HorS('Strawberries');
        HorS('Sunflower');
        HorS('Tomato');
        HorS('Violet');
        HorS('Watermelon');
        HorS('Wheat');
        HorS('Yellow_Berry');
        HorS('Corn');
        HorS('Dates');
        HorS('Eggplant');
        HorS('Gaint_Strawberry');
    }

    function sn(num, digits) {
        var si = [{
                value: 1,
                symbol: ""
            }, {
                value: 1E3,
                symbol: "K"
            }, {
                value: 1E6,
                symbol: "M"
            }, {
                value: 1E9,
                symbol: "B"
            }, {
                value: 1E12,
                symbol: "T"
            }, {
                value: 1E15,
                symbol: "E"
            }, {
                value: 1E18,
                symbol: "F"
            }, {
                value: 1E21,
                symbol: "G"
            }, {
                value: 1E24,
                symbol: "H"
            }, {
                value: 1E27,
                symbol: "I"
            }, {
                value: 1E30,
                symbol: "J"
            }, {
                value: 1E33,
                symbol: "K"
            }, {
                value: 1E36,
                symbol: "L"
            }, {
                value: 1E39,
                symbol: "M"
            }, {
                value: 1E42,
                symbol: "N"
            }, {
                value: 1E45,
                symbol: "O"
            }, {
                value: 1E48,
                symbol: "P"
            }, {
                value: 1E51,
                symbol: "Q"
            }, {
                value: 1E54,
                symbol: "R"
            }, {
                value: 1E57,
                symbol: "S"
            }, {
                value: 1E60,
                symbol: "T"
            }, {
                value: 1E63,
                symbol: "U"
            }, {
                value: 1E66,
                symbol: "V"
            }, {
                value: 1E69,
                symbol: "W"
            }, {
                value: 1E72,
                symbol: "X"
            }, {
                value: 1E75,
                symbol: "Y"
            }, {
                value: 1E78,
                symbol: "Z"
            },

            {
                value: 1E81,
                symbol: "A2"
            }, {
                value: 1E84,
                symbol: "B2"
            }, {
                value: 1E87,
                symbol: "C2"
            }, {
                value: 1E90,
                symbol: "D2"
            }, {
                value: 1E93,
                symbol: "E2"
            }, {
                value: 1E96,
                symbol: "F2"
            }, {
                value: 1E99,
                symbol: "G2"
            }, {
                value: 1E102,
                symbol: "H2"
            }, {
                value: 1E105,
                symbol: "I2"
            }, {
                value: 1E108,
                symbol: "J2"
            }, {
                value: 1E111,
                symbol: "K2"
            }, {
                value: 1E114,
                symbol: "L2"
            }, {
                value: 1E117,
                symbol: "M2"
            }, {
                value: 1E120,
                symbol: "N2"
            }, {
                value: 1E123,
                symbol: "O2"
            }, {
                value: 1E126,
                symbol: "P2"
            }, {
                value: 1E129,
                symbol: "Q2"
            }, {
                value: 1E132,
                symbol: "R2"
            }, {
                value: 1E135,
                symbol: "S2"
            }, {
                value: 1E138,
                symbol: "T2"
            }, {
                value: 1E141,
                symbol: "U2"
            }, {
                value: 1E144,
                symbol: "V2"
            }, {
                value: 1E147,
                symbol: "W2"
            }, {
                value: 1E150,
                symbol: "X2"
            }, {
                value: 1E153,
                symbol: "Y2"
            }, {
                value: 1E156,
                symbol: "Z2"
            }, {
                value: 1E159,
                symbol: "A2"
            }, {
                value: 1E162,
                symbol: "B3"
            }, {
                value: 1E165,
                symbol: "C3"
            }, {
                value: 1E168,
                symbol: "D3"
            }, {
                value: 1E171,
                symbol: "E3"
            }, {
                value: 1E174,
                symbol: "F3"
            }, {
                value: 1E177,
                symbol: "G3"
            }, {
                value: 1E180,
                symbol: "H3"
            }, {
                value: 1E183,
                symbol: "I3"
            }, {
                value: 1E186,
                symbol: "J3"
            }, {
                value: 1E189,
                symbol: "K3"
            }, {
                value: 1E192,
                symbol: "L3"
            }, {
                value: 1E195,
                symbol: "M3"
            }, {
                value: 1E198,
                symbol: "N3"
            }, {
                value: 1E201,
                symbol: "O3"
            }, {
                value: 1E204,
                symbol: "P3"
            }, {
                value: 1E207,
                symbol: "Q3"
            }, {
                value: 1E210,
                symbol: "R3"
            }, {
                value: 1E213,
                symbol: "S3"
            }, {
                value: 1E216,
                symbol: "T3"
            }, {
                value: 1E219,
                symbol: "U3"
            }, {
                value: 1E222,
                symbol: "V3"
            }, {
                value: 1E225,
                symbol: "W3"
            }, {
                value: 1E228,
                symbol: "X3"
            }, {
                value: 1E231,
                symbol: "Y3"
            }, {
                value: 1E234,
                symbol: "Z3"
            },

        ];
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    }
    Furnace_A = 0;
    Furnace_T = 0;
    index = 0;

    function CreateItem2Ingredients(New_Item, Amount_Created, Name_1, Cost_1, Name_2, Cost_2, AppendTo) {
        New_Item_ = New_Item.replace(/\s+/g, "_");
        Name_1_ = Name_1.replace(/\s+/g, "_");
        Name_2_ = Name_2.replace(/\s+/g, "_");
        if (typeof window[New_Item_ + "_A"] === 'undefined') {
            window[New_Item_ + "_A"] = 0;
            window[New_Item_ + "_T"] = 0
        }
        vis = New_Item_ + '_Vis_' + sn(Amount_Created, 1)
        Clear = "<div class='Clear " + vis + "'></div>"
        PlusSymbol = "<div class='Plus Symbol " + vis + "'>+</div>"
        EqualsSymbol = "<div class='Equals Symbol " + vis + "'>=</div>"
        Ingredient_1 = '<div class="' + Name_1_ + '_Cost ResourceBlock Black ' + vis + '"><div class="Title">' + Name_1 + '</div><div class="Amount">' + sn(Cost_1, 1) + '</div><img title="' + Name_1 + '" src="img/' + Name_1 + '.png" alt=""></div>';
        Ingredient_2 = '<div class="' + Name_2_ + '_Cost ResourceBlock Black ' + vis + '"><div class="Title">' + Name_2 + '</div><div class="Amount">' + sn(Cost_2, 1) + '</div><img title="' + Name_2 + '" src="img/' + Name_2 + '.png" alt=""></div>';
        New_Item_div = '<div class="' + New_Item_ + '_Buy_' + sn(Amount_Created, 1) + ' ResourceBlock Red ' + vis + '"><div class="Title">' + New_Item + '</div><div class="Amount">' + sn(Amount_Created, 1) + '</div><img title="' + New_Item + '" src="img/' + New_Item + '.png" alt=""></div>';
        New_Item_Total_div = '<div class="' + New_Item_ + ' ResourceBlock ' + vis + '"><div class="Title">' + New_Item + '</div><div class="Amount">0</div><img title="' + New_Item + '" src="img/' + New_Item + '.png" alt=""></div>';
        $(Clear + Ingredient_1 + PlusSymbol + Ingredient_2 + EqualsSymbol + New_Item_div + New_Item_Total_div + Clear).appendTo("." + AppendTo)

        $("." + New_Item_ + "_Buy_" + sn(Amount_Created, 1)).click(function() {
                New_Item_ = New_Item.replace(/\s+/g, "_");
                Name_1_ = Name_1.replace(/\s+/g, "_");
                Name_2_ = Name_2.replace(/\s+/g, "_");
                if (window[Name_1_ + "_A"] >= Cost_1 && window[Name_2_ + "_A"] >= Cost_2) {
                    window[Name_1_ + "_A"] -= Cost_1;
                    window[Name_2_ + "_A"] -= Cost_2;
                    if (Amount_Created == 1) {
                        $("." + New_Item_).find(".Amount").change();
                    }
                    $("." + New_Item_).find(".Amount").change();
                    CreateCenter(New_Item, "Standard", Amount_Created)
                }

            })
            //console.log(vis)
        window['Vis_' + index] = {
            Name: Name_1,
            Cost: Cost_1,
            Vis: vis
        };
        index++;
    }

    function CreateItem3Ingredients(New_Item, Amount_Created, Name_1, Cost_1, Name_2, Cost_2, Name_3, Cost_3, AppendTo) {
        New_Item_ = New_Item.replace(/\s+/g, "_");
        Name_1_ = Name_1.replace(/\s+/g, "_");
        Name_2_ = Name_2.replace(/\s+/g, "_");
        Name_3_ = Name_3.replace(/\s+/g, "_");
        if (typeof window[New_Item_ + "_A"] === 'undefined') {
            window[New_Item_ + "_A"] = 0;
            window[New_Item_ + "_T"] = 0
        }
        vis = New_Item_ + '_Vis_' + sn(Amount_Created, 1)
        Clear = "<div class='Clear " + vis + "'></div>"
        PlusSymbol = "<div class='Plus Symbol " + vis + "'>+</div>"
        EqualsSymbol = "<div class='Equals Symbol " + vis + "'>=</div>"
        Ingredient_1 = '<div class="' + Name_1_ + '_Cost ResourceBlock Black ' + vis + '"><div class="Title">' + Name_1 + '</div><div class="Amount">' + Cost_1 + '</div><img title="' + Name_1 + '" src="img/' + Name_1 + '.png" alt=""></div>';
        Ingredient_2 = '<div class="' + Name_2_ + '_Cost ResourceBlock Black ' + vis + '"><div class="Title">' + Name_2 + '</div><div class="Amount">' + Cost_2 + '</div><img title="' + Name_2 + '" src="img/' + Name_2 + '.png" alt=""></div>';
        Ingredient_3 = '<div class="' + Name_3_ + '_Cost ResourceBlock Black ' + vis + '"><div class="Title">' + Name_3 + '</div><div class="Amount">' + Cost_3 + '</div><img title="' + Name_3 + '" src="img/' + Name_3 + '.png" alt=""></div>';
        New_Item_div = '<div class="' + New_Item_ + '_Buy ResourceBlock Red ' + vis + '"><div class="Title">' + New_Item + '</div><div class="Amount">' + Amount_Created + '</div><img title="' + New_Item + '" src="img/' + New_Item + '.png" alt=""></div>';
        New_Item_Total_div = '<div class="' + New_Item_ + ' ResourceBlock ' + vis + '"><div class="Title">' + New_Item + '</div><div class="Amount">0</div><img title="' + New_Item + '" src="img/' + New_Item + '.png" alt=""></div>';
        $(Clear + Ingredient_1 + PlusSymbol + Ingredient_2 + PlusSymbol + Ingredient_3 + EqualsSymbol + New_Item_div + New_Item_Total_div + Clear).appendTo("." + AppendTo)
        $("." + New_Item_ + "_Buy").click(function() {
            New_Item_ = New_Item.replace(/\s+/g, "_");
            Name_1_ = Name_1.replace(/\s+/g, "_");
            Name_2_ = Name_2.replace(/\s+/g, "_");
            Name_3_ = Name_3.replace(/\s+/g, "_");
            if (window[Name_1_ + "_A"] >= Cost_1 && window[Name_2_ + "_A"] >= Cost_2 && window[Name_3_ + "_A"] >= Cost_3) {
                window[Name_1_ + "_A"] -= Cost_1;
                window[Name_2_ + "_A"] -= Cost_2;
                window[Name_3_ + "_A"] -= Cost_3;
                $("." + New_Item_).find(".Amount").change();
                CreateCenter(New_Item, "Standard", Amount_Created)
            }

        })
        window['Vis_' + index] = {
            Name: Name_1,
            Cost: Cost_1,
            Vis: vis
        };
        index++;
    }



    function CreateItem1Ingredients(New_Item, Amount_Created, Name_1, Cost_1, AppendTo) {

        New_Item_ = New_Item.replace(/\s+/g, "_");
        Name_1_ = Name_1.replace(/\s+/g, "_");
        if (typeof window[New_Item_ + "_A"] === 'undefined') {
            window[New_Item_ + "_A"] = 0;
            window[New_Item_ + "_T"] = 0
        }
        setInterval(function() {
            $("." + New_Item_).find('.Amount').html(sn(window[New_Item_ + "_A"], 1))
        }, 100)
        vis = New_Item_ + '_Vis_' + sn(Amount_Created, 1)
        Clear = "<div class='Clear " + vis + "'></div>"
        PlusSymbol = "<div class='Plus Symbol " + vis + "'>+</div>"
        EqualsSymbol = "<div class='Equals Symbol " + vis + "'>=</div>"
        Ingredient_1 = '<div class="' + Name_1_ + '_Cost ResourceBlock Black ' + vis + '"><div class="Title">' + Name_1 + '</div><div class="Amount">' + sn(Cost_1, 1) + '</div><img title="' + Name_1 + '" src="img/' + Name_1 + '.png" alt=""></div>';
        New_Item_div = '<div class="' + New_Item_ + '_Buy_' + sn(Amount_Created, 1) + ' ResourceBlock Red ' + vis + '"><div class="Title">' + New_Item + '</div><div class="Amount">' + sn(Amount_Created, 1) + '</div><img title="Click To Create ' + New_Item + '" src="img/' + New_Item + '.png" alt=""></div>';
        New_Item_Total_div = '<div class="' + New_Item_ + ' ResourceBlock ' + vis + '"><div class="Title">' + New_Item + '</div><div class="Amount">0</div><img title="' + New_Item + '" src="img/' + New_Item + '.png" alt=""></div>';
        $(Clear + Ingredient_1 + EqualsSymbol + New_Item_div + New_Item_Total_div + Clear).appendTo("." + AppendTo)
        $("." + New_Item_ + "_Buy_" + sn(Amount_Created, 1)).click(function() {
            New_Item_ = New_Item.replace(/\s+/g, "_");
            Name_1_ = Name_1.replace(/\s+/g, "_");
            if (window[Name_1_ + "_A"] >= Cost_1) {

                window[Name_1_ + "_A"] -= Cost_1;
                //if (Amount_Created == 1) {
                $("." + New_Item_).find(".Amount").change();
                //}

                CreateCenter(New_Item, "Standard", Amount_Created)

            }



        })

        window['Vis_' + index] = {

            Name: Name_1,
            Cost: Cost_1,
            Vis: vis
        };
        index++;
    }

    function HideOrShow(Name_1_, Cost_1, vis) {
        if (window[Name_1_ + '_A'] < Cost_1 || window[Name_1_ + '_A'] > Cost_1 * 100) {
            $('.' + vis).hide();
        } else {
            $('.' + vis).show();
        }
    }
    setInterval(function() {
        for (i = 0; i < index; i++) {
            console.log($('.' + window['Vis_' + i].Vis))
            HideOrShow(window['Vis_' + i].Name, window['Vis_' + i].Cost, window['Vis_' + i].Vis)
        }
    }, 100)
    Pure_Coal_Cost = 10;
    Pure_Gold_Cost = 6;
    Pure_Silver_Cost = 7;
    Pure_Ruby_Cost = 5;
    Pure_Diamond_Cost = 3;
    Pure_Emerald_Cost = 5;
    Pure_Diamond_House_Cost = 1000;
    for (i = 1e12; i >= 1; i = i / 10) {
        CreateItem1Ingredients("Pure Coal", 1 * i, "Coal", Pure_Coal_Cost * i, "Smelt");
    }
    for (i = 1e12; i >= 1; i = i / 10) {
        CreateItem1Ingredients("Pure Silver", 1 * i, "Silver", Pure_Silver_Cost * i, "Smelt");
    }
    for (i = 1e12; i >= 1; i = i / 10) {
        CreateItem1Ingredients("Pure Gold", 1 * i, "Gold", Pure_Gold_Cost * i, "Smelt");
    }
    for (i = 1e12; i >= 1; i = i / 10) {
        CreateItem1Ingredients("Pure Ruby", 1 * i, "Ruby", Pure_Ruby_Cost * i, "Smelt");
    }
    for (i = 1e12; i >= 1; i = i / 10) {
        CreateItem1Ingredients("Pure Diamond", 1 * i, "Diamond", Pure_Diamond_Cost * i, "Smelt");
    }
    for (i = 1e12; i >= 1; i = i / 10) {
        CreateItem1Ingredients("Pure Emerald", 1 * i, "Emerald", Pure_Emerald_Cost * i, "Smelt");
    }
    for (i = 10; i >= 1; i = i / 10) {
        CreateItem1Ingredients("Pure Diamond House", 1 * i, "Diamond", Pure_Diamond_House_Cost * i, "Smelt");
    }
    for (i = 10; i >= 1; i = i / 10) {
        CreateItem2Ingredients("Pickaxe", 1 * i, "Pure Coal", 10 * i, "Pure Silver", 10 * i, "Smelt")
    }
    for (i = 10; i >= 1; i = i / 10) {
        CreateItem2Ingredients("Hoe", 1 * i, "Pure Ruby", 10 * i, "Pure Diamond", 10 * i, "Smelt")
    }
    for (i = 10; i >= 1; i = i / 10) {
        CreateItem2Ingredients("Shovel", 1 * i, "Pure Ruby", 10 * i, "Pure Diamond", 10 * i, "Smelt")
    }
    for (i = 10; i >= 1; i = i / 10) {
        CreateItem2Ingredients("Watering Can", 1 * i, "Pure Emerald", 10 * i, "Pure Diamond", 10 * i, "Smelt")
    }
    for (i = 10; i >= 1; i = i / 10) {
        CreateItem2Ingredients("Shovel", 1 * i, "Pure Coal", 10 * i, "Pure Silver", 10 * i, "Smelt")
    }

    for (i = 10; i >= 1; i = i / 10) {
        CreateItem2Ingredients("Shovel", 1 * i, "Pure Coal", 10 * i, "Pure Silver", 10 * i, "Smelt")
    }



    function SpawnCursor(Name, Type) {
        if ($('.Cursor.' + Name).length > 10) {

        } else {
            mr1 = Math.random();
            mr2 = Math.random();
            Name_ = Name.replace(/\s+/g, "_");
            $('<img class="Cursor ' + Type + ' ' + Name_ + '" src="img/Cursors/' + Name + '.png">').css({
                'left': mr1 * (ww / 1.4),
                'top': mr2 * (wh / 1.4),
            }).appendTo('.Screen');
        }

    }

    Hoe_A = 1;
    Shovel_A = 1;
    Pickaxe_A = 1;
    Watering_Can_A = 1;

    $(".Pickaxe").find(".Amount").change(function() {
        console.log("working")
        clearInterval(Pickaxe_Spawner);
        Pickaxe_Spawner = setInterval(Spawn_Pickaxe, 50000 / Pickaxe_A)
    });
    $(".Hoe").find(".Amount").change(function() {
        console.log("working")
        clearInterval(Hoe_Spawner);
        Hoe_Spawner = setInterval(Spawn_Hoe, 50000 / Hoe_A)
    });
    $(".Watering_Can").find(".Amount").change(function() {
        console.log("working")
        clearInterval(Watering_Can_Spawner);
        Watering_Can_Spawner = setInterval(Spawn_Watering_Can, 50000 / Watering_Can_A)
    });
    $(".Shovel").find(".Amount").change(function() {
        console.log("working")
        clearInterval(Shovel_Spawner);
        Shovel_Spawner = setInterval(Spawn_Shovel, 50000 / Shovel_A)
    });


    Pickaxe_Spawner = setInterval(Spawn_Pickaxe, 50000 / Pickaxe_A);
    Hoe_Spawner = setInterval(Spawn_Hoe, 50000 / Hoe_A);
    Watering_Can_Spawner = setInterval(Spawn_Watering_Can, 50000 / Watering_Can_A);
    Shovel_Spawner = setInterval(Spawn_Shovel, 50000 / Shovel_A)

    function Spawn_Pickaxe() {

        SpawnCursor("Pickaxe", "Mine")
    }

    function Spawn_Hoe() {

        SpawnCursor("Hoe", "Farm")
    }

    function Spawn_Shovel() {

        SpawnCursor("Shovel", "Dig")
    }

    function Spawn_Watering_Can() {

        SpawnCursor("Watering Can", "Floriculture")
    }
    $('.Cursor').css({
        display: "none"
    });
    $("*").addClass("ns");
    Mine_Per_Click = 25 + Pickaxe_A / 20;
    Farm_Per_Click = 1 + Hoe_A / 20;
    Floriculture_Per_Click = 1 + Watering_Can_A / 20;

})