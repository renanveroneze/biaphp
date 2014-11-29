BiaPHP
======
```php
    /*
     *                                 ___           ___         ___           ___
     *      _____                     /\  \         /\  \       /\  \         /\  \
     *     /::\  \       ___         /::\  \       /::\  \      \:\  \       /::\  \
     *    /:/\:\  \     /\__\       /:/\:\  \     /:/\:\__\      \:\  \     /:/\:\__\
     *   /:/ /::\__\   /:/__/      /:/ /::\  \   /:/ /:/  /  ___ /::\  \   /:/ /:/  /
     *  /:/_/:/\:|__| /::\  \     /:/_/:/\:\__\ /:/_/:/  /  /\  /:/\:\__\ /:/_/:/  /
     *  \:\/:/ /:/  / \/\:\  \__  \:\/:/  \/__/ \:\/:/  /   \:\/:/  \/__/ \:\/:/  /
     *   \::/_/:/  /     \:\/\__\  \::/__/       \::/__/     \::/__/       \::/__/
     *    \:\/:/  /       \::/  /   \:\  \        \:\  \      \:\  \        \:\  \
     *     \::/  /        /:/  /     \:\__\        \:\__\      \:\__\        \:\__\
     *      \/__/         \/__/       \/__/         \/__/       \/__/         \/__/
     *
     *
     *  BiaPHP is created by Renan Veroneze and it's licensed under a Creative Commons BY-SA.
     *  © 2014~2015
     *  @0.0.1
     *
     */
```

Is a Pre-processor to Transcompile language  to PHP


## Examples

###### This is a BiaPHP syntax:

```python
<?
  class Test
  
    public __construct ->
      
      if $_SERVER['REMOTE_ADDR'] == '127.0.0.1'
        
        print 'Not allowed to localhost'
    
```


###### And compile this:

```php
<?php
  class Test {
    public function __construct() {
      if($_SERVER['REMOTE_ADDR'] == '127.0.0.1') {
        print 'Not allowed to localhost'; 
      }
    }
  }
?>
```


## Syntax Reference

| BiaPHP | PHP |
|--------|-----|
| <? | <?php |
| public f -> | public function f() {} |
| public f ( x ) -> | public function f( x ) {}|
| if x | if(x) {} |
| End vars lines  | ; |
| @x | $this->x |
| @@x | self::x |
| ~x | parent::x |

