## State - Data in component

Instance Variables

Instance variable which are input types & Output types

Note: the input variable values are received from the parent only
after the execution of the constructor

construction of an instance and receiving input types from parent
to child for the very first time is called as component initialization



class Box{
a;
@input() b;
}

## contentinit - parent alone loaded
## viewinit - parent with chld loaded

## Life cycle hooks

A component has various stages in it entire life cycle
like

one time
instantiation -
initialization
content initilazation
view initialization

n times
state updation
content updation
view updation

one time
destruction of the component

At any of these stages if you want to
run any logic you can introduce that logic
and run it - the methods which facilitates
this are called life cycle hooks

## viewchild
Most times you may want to read the state[instance member]
of the child from the parent



if such is the case we can get the reference of a child
instance member to the parent using @ViewChild