(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[7638],{17638:(r,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>n});const n="import React from 'react';\r\nimport {fromLonLat} from 'ol/proj';\r\nimport {Geometry, Point} from 'ol/geom';\r\nimport 'ol/ol.css';\r\n\r\nimport {RMap, ROSM, RLayerVector, RFeature, RGeolocation, RStyle} from 'rlayers';\r\nimport locationIcon from './svg/location.svg';\r\n\r\nexport default function Geolocation(): JSX.Element {\r\n    const [pos, setPos] = React.useState(new Point(fromLonLat([0, 0])));\r\n    const [accuracy, setAccuracy] = React.useState(null as Geometry);\r\n    return (\r\n        <RMap className='example-map' center={fromLonLat([0, 0])} zoom={4}>\r\n            <ROSM />\r\n            <RGeolocation\r\n                tracking={true}\r\n                trackingOptions={{enableHighAccuracy: true}}\r\n                onChange={React.useCallback(function (e) {\r\n                    // Note the use of function instead of an arrow lambda\r\n                    // which does not have this\r\n                    setPos(new Point(e.target.getPosition()));\r\n                    setAccuracy(e.target.getAccuracyGeometry());\r\n                    this.context.map.getView().fit(e.target.getAccuracyGeometry(), {\r\n                        duration: 250,\r\n                        maxZoom: 15\r\n                    });\r\n                }, [])}\r\n            />\r\n            <RLayerVector zIndex={10}>\r\n                <RStyle.RStyle>\r\n                    <RStyle.RIcon src={locationIcon} anchor={[0.5, 0.8]} />\r\n                    <RStyle.RStroke color={'#007bff'} width={3} />\r\n                </RStyle.RStyle>\r\n                <RFeature geometry={pos}></RFeature>\r\n                <RFeature geometry={accuracy}></RFeature>\r\n            </RLayerVector>\r\n        </RMap>\r\n    );\r\n}\r\n"}}]);