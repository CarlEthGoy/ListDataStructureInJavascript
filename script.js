import { List } from './List.js';
console.log("It's working");

let list = new List();

export function Add()
{
    var value = $("#input_value").val();
    ShowEverythingBefore();
    list.Add(value);
    ShowEverything();
}

export function Remove(){
    ShowEverythingBefore();
    list.Remove();
    ShowEverything();
}

export function AddAtIndex(){
    ShowEverythingBefore();
    var value = $("#input_value").val();
    var index = $("#index_value").val() ?? 0;
    list.AddAtIndex(value, index);
    ShowEverything();
}

export function RemoveAtIndex(){
    ShowEverythingBefore();
    var index = $("#index_value").val() ?? 0;
    list.RemoveAtIndex(index);
    ShowEverything();
}

export function GetAtIndex(){
    var index = $("#index_value").val() ?? 0;
    list.GetAtIndex(index);
}

export function GetFirst(){
    list.GetFirst();
}

export function GetLast(){
    list.GetLast();
}

export function ShowEverything(){
   let result = list.ShowEverything();
   $("#show_me_here").html(result);
}

export function ShowEverythingBefore(){
    let result = list.ShowEverything();
    $("#show_me_here_before").html(result);
}
