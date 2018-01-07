# DeAfvalApp-api-proxy
Due to the horrible format of 'De Afval App' api, I have decided to write a proxy for it.

<dl>
    <dt><a href="#install">Install</a></dt>
    <dd></dd>
    <dt><a href="#usage">Usage</a></dt>
    <dd></dd>
    <dt><a href="#documantation">Documentation</a></dt>
    <dd></dd>
</dl>

<a name="install"></a>
## Install
`npm install DeAfvalApp-api-proxy`

`yarn add DeAfvalApp-api-proxy`

<a name="usage"></a>
## Usage

```javascript 1.8
const proxy = require('DeAfvalApp-api-proxy')();

async function doSomethingWithAddress(){
    const address = await proxy.locations.getAddress('1234AB', 1);
    console.log(address);
}
```
<a name="documentation"></a>
## Modules

<dl>
<dt><a href="#module_Proxy">Proxy</a></dt>
<dd></dd>
<dt><a href="#Proxy.module_Announcements">Announcements</a></dt>
<dd></dd>
<dt><a href="#Proxy.module_Garbage">Garbage</a></dt>
<dd></dd>
<dt><a href="#Proxy.module_Locations">Locations</a></dt>
<dd></dd>
</dl>

<a name="module_Proxy"></a>

## Proxy
**Properties**

| Name | Type |
| --- | --- |
| locations | <code>module:Locations</code> | 
| announcements | <code>module:Announcements</code> | 
| garbage | <code>module:Garbage</code> | 

<a name="module_Proxy..Proxy"></a>

### Proxy~Proxy
**Kind**: inner class of [<code>Proxy</code>](#module_Proxy)  
<a name="Proxy.module_Announcements"></a>

## Announcements
<a name="Proxy.module_Announcements..getAnnouncements"></a>

### Announcements~getAnnouncements(zipCode, houseNumber, [houseNumberAddition]) ⇒ <code>Promise</code>
This return an object of all announcements made by the garbage collection company/municipality

**Kind**: inner method of [<code>Announcements</code>](#Proxy.module_Announcements)  
**Returns**: <code>Promise</code> - Promise object represents an array of announcement objects  

| Param | Type | Description |
| --- | --- | --- |
| zipCode | <code>string</code> | The zip code of the user's address |
| houseNumber | <code>number</code> | The house number of the user's address |
| [houseNumberAddition] | <code>string</code> | The house number addition of the user's address |

<a name="Proxy.module_Garbage"></a>

## Garbage

* [Garbage](#Proxy.module_Garbage)
    * [~getSchedule(zipCode, houseNumber, [houseNumberAddition])](#Proxy.module_Garbage..getSchedule) ⇒ <code>Promise</code>
    * [~getGarbageInfo(zipCode, houseNumber, [houseNumberAddition])](#Proxy.module_Garbage..getGarbageInfo) ⇒ <code>Promise</code>

<a name="Proxy.module_Garbage..getSchedule"></a>

### Garbage~getSchedule(zipCode, houseNumber, [houseNumberAddition]) ⇒ <code>Promise</code>
This return an object array of the garbage collection schedule

**Kind**: inner method of [<code>Garbage</code>](#Proxy.module_Garbage)  
**Returns**: <code>Promise</code> - Promise object represents an array of objects  

| Param | Type | Description |
| --- | --- | --- |
| zipCode | <code>string</code> | The zip code of the user's address |
| houseNumber | <code>number</code> | The house number of the user's address |
| [houseNumberAddition] | <code>string</code> | The house number addition of the user's address |

<a name="Proxy.module_Garbage..getGarbageInfo"></a>

### Garbage~getGarbageInfo(zipCode, houseNumber, [houseNumberAddition]) ⇒ <code>Promise</code>
This return an object array filled with information about garbage collection

**Kind**: inner method of [<code>Garbage</code>](#Proxy.module_Garbage)  
**Returns**: <code>Promise</code> - Promise object represents an object array filled with garbage collection information  

| Param | Type | Description |
| --- | --- | --- |
| zipCode | <code>string</code> | The zip code of the user's address |
| houseNumber | <code>number</code> | The house number of the user's address |
| [houseNumberAddition] | <code>string</code> | The house number addition of the user's address |

<a name="Proxy.module_Locations"></a>

## Locations

* [Locations](#Proxy.module_Locations)
    * [~getAddress(zipCode, houseNumber, [houseNumberAddition])](#Proxy.module_Locations..getAddress) ⇒ <code>Promise</code>
    * [~getAllMunicipalities()](#Proxy.module_Locations..getAllMunicipalities) ⇒ <code>Promise</code>
    * [~getMunicipalityInfo(zipCode, houseNumber, [houseNumberAddition])](#Proxy.module_Locations..getMunicipalityInfo) ⇒ <code>Promise</code>

<a name="Proxy.module_Locations..getAddress"></a>

### Locations~getAddress(zipCode, houseNumber, [houseNumberAddition]) ⇒ <code>Promise</code>
This return an Address object based on a zip code and house number

**Kind**: inner method of [<code>Locations</code>](#Proxy.module_Locations)  
**Returns**: <code>Promise</code> - Promise object represents an object filled with address data  

| Param | Type | Description |
| --- | --- | --- |
| zipCode | <code>string</code> | The zip code of the user's address |
| houseNumber | <code>number</code> | The house number of the user's address |
| [houseNumberAddition] | <code>string</code> | The house number addition of the user's address |

<a name="Proxy.module_Locations..getAllMunicipalities"></a>

### Locations~getAllMunicipalities() ⇒ <code>Promise</code>
List all available municipalities in an object array

**Kind**: inner method of [<code>Locations</code>](#Proxy.module_Locations)  
**Returns**: <code>Promise</code> - Promise object represents an object array filled with municipality data  
<a name="Proxy.module_Locations..getMunicipalityInfo"></a>

### Locations~getMunicipalityInfo(zipCode, houseNumber, [houseNumberAddition]) ⇒ <code>Promise</code>
This return an municipality object based on a zip code and house number

**Kind**: inner method of [<code>Locations</code>](#Proxy.module_Locations)  
**Returns**: <code>Promise</code> - Promise object represents an object filled with municipality information  

| Param | Type | Description |
| --- | --- | --- |
| zipCode | <code>string</code> | The zip code of the user's address |
| houseNumber | <code>number</code> | The house number of the user's address |
| [houseNumberAddition] | <code>string</code> | The house number addition of the user's address |


