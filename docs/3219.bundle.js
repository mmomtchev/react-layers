(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[3219],{33219:(r,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>t});const t="import React from 'react';\r\nimport {fromLonLat} from 'ol/proj';\r\nimport {boundingExtent, getCenter} from 'ol/extent';\r\nimport 'ol/ol.css';\r\n\r\nimport {RMap, ROSM} from 'rlayers';\r\n\r\nconst extent = boundingExtent([fromLonLat([2.25, 48.81]), fromLonLat([2.42, 48.9])]);\r\nconst center = getCenter(extent);\r\nexport default function Extent(): JSX.Element {\r\n    return (\r\n        <RMap className='example-map' center={center} extent={extent} maxZoom={16} zoom={8}>\r\n            <ROSM />\r\n        </RMap>\r\n    );\r\n}\r\n"}}]);