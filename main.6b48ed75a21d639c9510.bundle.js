webpackJsonp([1],{0:function(l,n,t){l.exports=t("cDNt")},cDNt:function(l,n,t){"use strict";function u(){return{type:ll}}function e(){return{type:nl}}function o(l){return{type:tl,payload:l}}function r(){return{type:ul}}function i(){return{type:el}}function a(){return{type:ol}}function s(l){return{type:rl,payload:l}}function c(l){return{type:il,payload:l}}function p(l){return wl._21(2,[(l()(),wl._19(null,["\n\t\t"])),(l()(),wl._4(0,null,null,0,"div",[],[[8,"className",0],[4,"width",null],[4,"height",null],[4,"left",null],[4,"top",null]],null,null,null,null)),(l()(),wl._19(null,["\n\t"]))],null,function(l,n){var t=n.component;l(n,1,0,wl._7(1,"","app-cell app-cell-"+t.cellClass,""),t.size+"px",t.size+"px",t.cell.column*(t.size-1)+"px",t.cell.row*(t.size-1)+"px")})}function _(l){return wl._21(0,[(l()(),wl._4(0,null,null,1,"app-cell",[],null,null,null,p,Ml)),wl._2(49152,null,0,bl,[],null,null)],null,null)}function f(l){return kl._21(0,[(l()(),kl._4(0,null,null,1,"app-cell",[],null,null,null,p,Ml)),kl._2(49152,null,0,bl,[],{cell:[0,"cell"],size:[1,"size"],isGhost:[2,"isGhost"]},null)],function(l,n){var t=n.component;l(n,1,0,n.context.$implicit,t.cellSize,t.isGhost)},null)}function m(l){return kl._21(2,[(l()(),kl._19(null,["\n\t\t"])),(l()(),kl.Y(16777216,null,null,1,null,f)),kl._2(802816,null,0,Tl.d,[kl.N,kl.K,kl.t],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(l()(),kl._19(null,["\n\t"]))],function(l,n){var t=n.component;l(n,2,0,t.cells,t.trackByFn)},null)}function h(l){return kl._21(0,[(l()(),kl._4(0,null,null,1,"app-tetromino",[],null,null,null,m,Cl)),kl._2(49152,null,0,xl,[],null,null)],null,null)}function d(l){return Ll._21(0,[(l()(),Ll._4(0,null,null,2,"app-cell",[],null,null,null,p,Ml)),Ll._2(49152,null,0,bl,[],{cell:[0,"cell"],size:[1,"size"]},null),(l()(),Ll._19(null,["\n\t\t\t"]))],function(l,n){var t=n.component;l(n,1,0,n.context.$implicit,t.state.cellSize)},null)}function v(l){return Ll._21(0,[(l()(),Ll._4(0,null,null,1,"div",[["class","app-paused-banner"]],null,null,null,null,null)),(l()(),Ll._19(null,["Game Paused"]))],null,null)}function g(l){return Ll._21(2,[(l()(),Ll._19(null,["\n\t\t"])),(l()(),Ll._4(0,null,null,15,"div",[["class","app-board"]],[[2,"app-board-paused",null],[4,"width",null],[4,"height",null]],null,null,null,null)),(l()(),Ll._19(null,["\n\t\t\t"])),(l()(),Ll._4(0,null,null,2,"app-tetromino",[],null,null,null,m,Cl)),Ll._2(49152,null,0,xl,[],{cells:[0,"cells"],cellSize:[1,"cellSize"],isGhost:[2,"isGhost"]},null),(l()(),Ll._19(null,["\n\t\t\t"])),(l()(),Ll._19(null,["\n\n\t\t\t"])),(l()(),Ll.Y(16777216,null,null,1,null,d)),Ll._2(802816,null,0,Nl.d,[Ll.N,Ll.K,Ll.t],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(l()(),Ll._19(null,["\n\n\t\t\t"])),(l()(),Ll._4(0,null,null,2,"app-tetromino",[],null,null,null,m,Cl)),Ll._2(49152,null,0,xl,[],{cells:[0,"cells"],cellSize:[1,"cellSize"],isGhost:[2,"isGhost"]},null),(l()(),Ll._19(null,["\n\t\t\t"])),(l()(),Ll._19(null,["\n\n\t\t\t"])),(l()(),Ll.Y(16777216,null,null,1,null,v)),Ll._2(16384,null,0,Nl.e,[Ll.N,Ll.K],{ngIf:[0,"ngIf"]},null),(l()(),Ll._19(null,["\n\t\t"])),(l()(),Ll._19(null,["\n\t"]))],function(l,n){var t=n.component;l(n,4,0,t.state.ghostCells,t.state.cellSize,!0),l(n,8,0,t.state.unclearedCells,t.unclearedCellsTrackBy);l(n,11,0,null==t.state.activeTetromino?null:t.state.activeTetromino.cells,t.state.cellSize,!1),l(n,15,0,t.isPaused)},function(l,n){var t=n.component;l(n,1,0,t.isPaused,t.width+"px",t.height+"px")})}function b(l){return Ll._21(0,[(l()(),Ll._4(0,null,null,1,"app-board",[],null,[["document","keydown"]],function(l,n,t){var u=!0;if("document:keydown"===n){u=!1!==Ll._16(l,1).onKeyUp(t)&&u}return u},g,Dl)),Ll._2(49152,null,0,Sl,[],null,null)],null,null)}function w(l){return Il._21(2,[(l()(),Il._19(null,["\n\t\t"])),(l()(),Il._4(0,null,null,10,"div",[["class","app-controls"]],null,null,null,null,null)),(l()(),Il._19(null,["\n\t\t\t"])),(l()(),Il._4(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.newGameBtnClicked(t)&&u}return u},null,null)),(l()(),Il._19(null,["New Game"])),(l()(),Il._19(null,["\n\t\t\t"])),(l()(),Il._4(0,null,null,1,"button",[["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.pauseBtnClicked(t)&&u}return u},null,null)),(l()(),Il._19(null,["",""])),(l()(),Il._19(null,["\n\t\t\t"])),(l()(),Il._4(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.onHelpBtnClick.emit()&&u}return u},null,null)),(l()(),Il._19(null,["Help"])),(l()(),Il._19(null,["\n\t\t"])),(l()(),Il._19(null,["\n\t"]))],null,function(l,n){var t=n.component;l(n,6,0,!t.isStarted||t.isFinished),l(n,7,0,t.isPaused?"Resume Game":"Pause Game")})}function y(l){return Il._21(0,[(l()(),Il._4(0,null,null,1,"app-controls",[],null,null,null,w,Gl)),Il._2(49152,null,0,Fl,[],null,null)],null,null)}function M(l){var n=l.cells.map(function(l){return l.column}),t=Math.min.apply(Math,n);return Math.max.apply(Math,n)-t+1}function x(l,n,t){void 0===t&&(t=!0);var u=M(l),e=t?Math.floor((n-u)/2):(n-u)/2,o=l.cells.map(function(l){return jl({},l,{column:l.column+e})}),r=l.unrotatedCells.map(function(l){return jl({},l,{column:l.column+e})});return jl({},l,{cells:o,unrotatedCells:r})}function k(l,n,t,u,e){var o=n,r=t;if(n<0){var i=Math.min.apply(Math,l.cells.map(function(l){return l.column}));o=Math.max(-i,o)}else{var a=Math.max.apply(Math,l.cells.map(function(l){return l.column}));o=Math.min(e-a-1,o)}if(t<0){var s=Math.min.apply(Math,l.cells.map(function(l){return l.row}));r=Math.max(-s,r)}else{var c=Math.max.apply(Math,l.cells.map(function(l){return l.row}));r=Math.min(u-c-1,r)}return 0===o&&0===r?l:Bl({},l,{cells:l.cells.map(function(l){return Bl({},l,{row:l.row+r,column:l.column+o})}),unrotatedCells:l.unrotatedCells.map(function(l){return Bl({},l,{row:l.row+r,column:l.column+o})})})}function T(l){return El._21(2,[(l()(),El._19(null,["\n\t\t"])),(l()(),El._4(0,null,null,11,"div",[["class","app-next-tetromino-wrapper"]],[[4,"height",null]],null,null,null,null)),(l()(),El._19(null,["\n\t\t\t"])),(l()(),El._4(0,null,null,1,"div",[["class","app-next-tetromino-label"]],null,null,null,null,null)),(l()(),El._19(null,["Next Tetromino"])),(l()(),El._19(null,["\n\t\t\t"])),(l()(),El._4(0,null,null,5,"div",[["class","app-next-tetromino"]],[[4,"width",null],[4,"height",null],[4,"top",null]],null,null,null,null)),(l()(),El._19(null,["\n\t\t\t\t"])),(l()(),El._4(0,null,null,2,"app-tetromino",[],null,null,null,m,Cl)),El._2(49152,null,0,xl,[],{cells:[0,"cells"],cellSize:[1,"cellSize"],isGhost:[2,"isGhost"]},null),(l()(),El._19(null,["\n\t\t\t\t"])),(l()(),El._19(null,["\n\t\t\t"])),(l()(),El._19(null,["\n\t\t"])),(l()(),El._19(null,["\n\t"]))],function(l,n){var t=n.component;l(n,9,0,t.adjustTetrominoPosition(t.tetromino).cells,t.cellSize,!1)},function(l,n){var t=n.component;l(n,1,0,4*t.cellSize+60+"px"),l(n,6,0,3*t.cellSize+"px",4*t.cellSize+"px",.5*(4-t.rowSpan)*t.cellSize+"px")})}function O(l){return El._21(0,[(l()(),El._4(0,null,null,1,"app-next-tetromino",[],null,null,null,T,Zl)),El._2(49152,null,0,Al,[],null,null)],null,null)}function C(l){return Vl._21(2,[(l()(),Vl._19(null,["\n\t\t"])),(l()(),Vl._4(0,null,null,28,"div",[["class","app-scoreboard"]],null,null,null,null,null)),(l()(),Vl._19(null,["\n\t\t\t"])),(l()(),Vl._4(0,null,null,7,"div",[["class","app-scoreboard-box app-scoreboard-box-score"]],null,null,null,null,null)),(l()(),Vl._19(null,["\n\t\t\t\t"])),(l()(),Vl._4(0,null,null,1,"div",[["class","app-scoreboard-box-label"]],null,null,null,null,null)),(l()(),Vl._19(null,["Score"])),(l()(),Vl._19(null,["\n\t\t\t\t"])),(l()(),Vl._4(0,null,null,1,"div",[["class","app-scoreboard-box-value"]],null,null,null,null,null)),(l()(),Vl._19(null,["",""])),(l()(),Vl._19(null,["\n\t\t\t"])),(l()(),Vl._19(null,["\n\t\t\t"])),(l()(),Vl._4(0,null,null,7,"div",[["class","app-scoreboard-box app-scoreboard-box-level"]],null,null,null,null,null)),(l()(),Vl._19(null,["\n\t\t\t\t"])),(l()(),Vl._4(0,null,null,1,"div",[["class","app-scoreboard-box-label"]],null,null,null,null,null)),(l()(),Vl._19(null,["Level"])),(l()(),Vl._19(null,["\n\t\t\t\t"])),(l()(),Vl._4(0,null,null,1,"div",[["class","app-scoreboard-box-value"]],null,null,null,null,null)),(l()(),Vl._19(null,["",""])),(l()(),Vl._19(null,["\n\t\t\t"])),(l()(),Vl._19(null,["\n\t\t\t"])),(l()(),Vl._4(0,null,null,7,"div",[["class","app-scoreboard-box app-scoreboard-box-lines"]],null,null,null,null,null)),(l()(),Vl._19(null,["\n\t\t\t\t"])),(l()(),Vl._4(0,null,null,1,"div",[["class","app-scoreboard-box-label"]],null,null,null,null,null)),(l()(),Vl._19(null,["Lines until next level"])),(l()(),Vl._19(null,["\n\t\t\t\t"])),(l()(),Vl._4(0,null,null,1,"div",[["class","app-scoreboard-box-value"]],null,null,null,null,null)),(l()(),Vl._19(null,["",""])),(l()(),Vl._19(null,["\n\t\t\t"])),(l()(),Vl._19(null,["\n\t\t"])),(l()(),Vl._19(null,["\n\t"]))],null,function(l,n){var t=n.component;l(n,9,0,t.score),l(n,18,0,t.level),l(n,27,0,t.lines)})}function P(l){return Vl._21(0,[(l()(),Vl._4(0,null,null,1,"app-scoreboard",[],null,null,null,C,Yl)),Vl._2(49152,null,0,Kl,[],null,null)],null,null)}function S(l){return Wl._21(0,[(l()(),Wl._4(0,null,null,169,"div",[["class","app-help-modal-wrapper"]],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t"])),(l()(),Wl._4(0,null,null,166,"div",[["class","app-help-modal"]],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"button",[["class","app-help-modal-close-btn"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.onHelpModalClose.emit()&&u}return u},null,null)),(l()(),Wl._19(null,["\xd7"])),(l()(),Wl._19(null,["\n\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),Wl._19(null,["Controls"])),(l()(),Wl._19(null,["\n\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,76,"table",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,73,"tbody",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["N"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["New game"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["P"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Pause game"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Spacebar"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Hard drop"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Down arrow"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Soft drop"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Up arrow / Z"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Rotate clockwise"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["X"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Rotate anticlockwise"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Left arrow"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Move left"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Right arrow"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Move right"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\n\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),Wl._19(null,["Scoring"])),(l()(),Wl._19(null,["\n\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,76,"table",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,73,"tbody",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Soft drop"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["1"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Hard drop"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["2 x (cells dropped)"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Single line clear"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["100 x (current level)"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Double line clear"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["300 x (current level)"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Triple line clear"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["500 x (current level)"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Tetris (Quad line clear)"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["800 x (current level)"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Combo line clear"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["50 x (# consecutive clears)"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["Perfect clear (empty the board)"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t\t"])),(l()(),Wl._4(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),Wl._19(null,["1200 x (current level)"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t\t"])),(l()(),Wl._19(null,["\n\t\t\t"]))],null,null)}function L(l){return Wl._21(2,[(l()(),Wl._19(null,["\n\t\t"])),(l()(),Wl._4(0,null,null,4,"div",[["class","app-help"]],null,null,null,null,null)),(l()(),Wl._19(null,["\n\t\t\t"])),(l()(),Wl.Y(16777216,null,null,1,null,S)),Wl._2(16384,null,0,Xl.e,[Wl.N,Wl.K],{ngIf:[0,"ngIf"]},null),(l()(),Wl._19(null,["\n\t\t"])),(l()(),Wl._19(null,["\n\t"]))],function(l,n){l(n,4,0,n.component.isHelpModalOpen)},null)}function N(l){return Wl._21(0,[(l()(),Wl._4(0,null,null,1,"app-help",[],null,null,null,L,ln)),Wl._2(49152,null,0,$l,[],null,null)],null,null)}function R(l){return nn._21(0,[(l()(),nn._4(0,null,null,24,"div",[["class","app-container"]],null,null,null,null,null)),(l()(),nn._19(null,["\n\n\t\t\t\t"])),(l()(),nn._4(0,null,null,2,"app-board",[],null,[[null,"onSoftDrop"],[null,"onHardDrop"],[null,"onMoveLeft"],[null,"onMoveRight"],[null,"onTogglePause"],[null,"onNewGame"],[null,"onRotate"],["document","keydown"]],function(l,n,t){var u=!0,e=l.component;if("document:keydown"===n){u=!1!==nn._16(l,3).onKeyUp(t)&&u}if("onSoftDrop"===n){u=!1!==e.softDrop()&&u}if("onHardDrop"===n){u=!1!==e.hardDrop()&&u}if("onMoveLeft"===n){u=!1!==e.moveLeft()&&u}if("onMoveRight"===n){u=!1!==e.moveRight()&&u}if("onTogglePause"===n){u=!1!==e.togglePause()&&u}if("onNewGame"===n){u=!1!==e.newGame()&&u}if("onRotate"===n){u=!1!==e.rotate(t)&&u}return u},g,Dl)),nn._2(49152,null,0,Sl,[],{state:[0,"state"]},{onMoveLeft:"onMoveLeft",onMoveRight:"onMoveRight",onSoftDrop:"onSoftDrop",onRotate:"onRotate",onHardDrop:"onHardDrop",onTogglePause:"onTogglePause",onNewGame:"onNewGame"}),(l()(),nn._19(null,["\n\t\t\t\t"])),(l()(),nn._19(null,["\n\n\t\t\t\t"])),(l()(),nn._4(0,null,null,13,"div",[["class","app-side-panel"]],null,null,null,null,null)),(l()(),nn._19(null,["\n\t\t\t\t\t"])),(l()(),nn._4(0,null,null,2,"app-controls",[],null,[[null,"onNew"],[null,"onPause"],[null,"onHelpBtnClick"]],function(l,n,t){var u=!0,e=l.component;if("onNew"===n){u=!1!==e.newGame()&&u}if("onPause"===n){u=!1!==e.togglePause()&&u}if("onHelpBtnClick"===n){u=!1!==e.toggleHelpModal(!0)&&u}return u},w,Gl)),nn._2(49152,null,0,Fl,[],{isStarted:[0,"isStarted"],isFinished:[1,"isFinished"],isTiming:[2,"isTiming"]},{onNew:"onNew",onPause:"onPause",onHelpBtnClick:"onHelpBtnClick"}),(l()(),nn._19(null,["\n\t\t\t\t\t"])),(l()(),nn._19(null,["\n\n\t\t\t\t\t"])),(l()(),nn._4(0,null,null,2,"app-next-tetromino",[],null,null,null,T,Zl)),nn._2(49152,null,0,Al,[],{tetromino:[0,"tetromino"],cellSize:[1,"cellSize"]},null),(l()(),nn._19(null,["\n\t\t\t\t\t"])),(l()(),nn._19(null,["\n\n\t\t\t\t\t"])),(l()(),nn._4(0,null,null,2,"app-scoreboard",[],null,null,null,C,Yl)),nn._2(49152,null,0,Kl,[],{lines:[0,"lines"],score:[1,"score"],level:[2,"level"]},null),(l()(),nn._19(null,["\n\t\t\t\t\t"])),(l()(),nn._19(null,["\n\t\t\t\t"])),(l()(),nn._19(null,["\n\n\t\t\t\t"])),(l()(),nn._4(0,null,null,2,"app-help",[],null,[[null,"onHelpModalClose"]],function(l,n,t){var u=!0,e=l.component;if("onHelpModalClose"===n){u=!1!==e.toggleHelpModal(!1)&&u}return u},L,ln)),nn._2(49152,null,0,$l,[],{isHelpModalOpen:[0,"isHelpModalOpen"]},{onHelpModalClose:"onHelpModalClose"}),(l()(),nn._19(null,["\n\t\t\t\t"])),(l()(),nn._19(null,["\n\n\t\t\t"]))],function(l,n){l(n,3,0,n.context.ngIf),l(n,9,0,n.context.ngIf.isStarted,n.context.ngIf.isFinished,n.context.ngIf.isTiming),l(n,13,0,n.context.ngIf.nextTetromino,n.context.ngIf.cellSize),l(n,17,0,n.context.ngIf.linesUntilNextLevel,n.context.ngIf.score,n.context.ngIf.level),l(n,22,0,n.context.ngIf.isHelpModalOpen)},null)}function D(l){return nn._21(0,[(l()(),nn._19(null,["\n\t\t"])),(l()(),nn._4(0,null,null,16,"div",[["class","app"]],null,null,null,null,null)),(l()(),nn._19(null,["\n\t\t\t"])),(l()(),nn._4(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),nn._19(null,["Angular + Redux Tetris"])),(l()(),nn._19(null,["\n\t\t\t"])),(l()(),nn.Y(16777216,null,null,2,null,R)),nn._2(16384,null,0,tn.e,[nn.N,nn.K],{ngIf:[0,"ngIf"]},null),nn._17(131072,tn.a,[nn.g]),(l()(),nn._19(null,["\n\n\t\t\t"])),(l()(),nn._4(0,null,null,6,"div",[["class","app-footer"]],null,null,null,null,null)),(l()(),nn._19(null,["\n\t\t\t\t"])),(l()(),nn._4(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),nn._19(null,["Built by David Banks. "])),(l()(),nn._4(0,null,null,1,"a",[["href","https://github.com/DavidBanksNZ/ng-tetris/"]],null,null,null,null,null)),(l()(),nn._19(null,["GitHub Repo"])),(l()(),nn._19(null,["\n\t\t\t"])),(l()(),nn._19(null,["\n\t\t"])),(l()(),nn._19(null,["\n\t"]))],function(l,n){var t=n.component;l(n,7,0,nn._20(n,7,0,nn._16(n,8).transform(t.state$)))},null)}function H(l){return nn._21(0,[(l()(),nn._4(0,null,null,1,"app-root",[],null,null,null,D,on)),nn._2(4243456,null,0,gl,[un.l,dl],null,null)],null,null)}function F(l,n,t){return{row:l,column:n,type:t}}function I(l){var n;switch(l){case W.O:n=[F(-2,0,l),F(-2,1,l),F(-1,0,l),F(-1,1,l)];break;case W.T:n=[F(-1,0,l),F(-1,1,l),F(-1,2,l),F(-2,1,l)];break;case W.I:n=[F(-4,0,l),F(-3,0,l),F(-2,0,l),F(-1,0,l)];break;case W.L:n=[F(-3,0,l),F(-2,0,l),F(-1,0,l),F(-1,1,l)];break;case W.J:n=[F(-3,1,l),F(-2,1,l),F(-1,1,l),F(-1,0,l)];break;case W.Z:n=[F(-2,0,l),F(-2,1,l),F(-1,1,l),F(-1,2,l)];break;case W.S:n=[F(-1,0,l),F(-1,1,l),F(-2,1,l),F(-2,2,l)];break;default:n=[]}return{type:l,orientation:an.Normal,cells:n,unrotatedCells:n}}function z(){var l=Math.floor(Math.random()*sn.length);return I(W[sn[l]])}function G(l){return 100+50*Math.max(0,10-l)}function j(l,n){for(var t=!1,u=0,e=l.cells.length;u<e;u++){if("break"===function(u,e){var o=l.cells[u];if(n.filter(function(l){return l.row===o.row&&l.column===o.column}).length>0)return t=!0,"break"}(u))break}return t}function B(l,n,t){for(var u=t,e=l.cells.map(function(l){return l.column}),o=Math.min.apply(Math,e),r=Math.max.apply(Math,e),i=o;i<=r;i++){if("break"===function(e){var o=l.cells.filter(function(l){return l.column===e}),r=o.map(function(l){return l.row}),i=Math.max.apply(Math,r),a=n.filter(function(l){return l.column===e&&l.row>i}),s=a.length>0?Math.min.apply(Math,a.map(function(l){return l.row})):t;if(0===(u=Math.min(u,s-i-1)))return"break"}(i))break}return u}function A(l,n){var t=n.type===ul,u=n.payload,e=l.numRows,o=l.numCols,r=l.linesPerLevel,i=l.unclearedCells,a=l.level,s=l.linesUntilNextLevel,c=l.isFinished,p=l.isTiming,_=l.nextTetromino,f=l.activeTetromino,m=l.score,h=l.combo,d=l.ghostCells,v=B(f,i,e);if(v>0&&(u||(m+=t?2*v:1),f=k(f,0,t?v:1,e,o),v=t?0:v),0===v){var g=f.cells.map(function(l){return l.row}),b=Math.min.apply(Math,g),w=Math.max.apply(Math,g);if(w<0)return cn({},l,{isFinished:!0,isTiming:!1});i=i.concat(f.cells);for(var y=0,M=Math.max(0,b);M<=w;M++)!function(l){i.filter(function(n){return n.row===l}).length===o&&(i=i.filter(function(n){return n.row!==l}).map(function(n){return n.row<l?cn({},n,{row:n.row+1}):n}),y+=1)}(M);if(y>0){switch(m+=50*h,h+=1,s-=y,y){case 4:m+=800*a;break;case 3:m+=500*a;break;case 2:m+=300*a;break;default:m+=100*a}s<=0&&(a+=1,s=r),0===i.length&&(m+=1200*a)}else h=0;var T=k(x(_,l.numCols),0,0,e,o);j(T,i)?(c=!0,p=!1):(f=T,_=z(),v=B(f,i,e),d=f.cells.map(function(l){return cn({},l,{row:l.row+v})}))}else d=f.cells.map(function(l){return cn({},l,{row:l.row+v-1})});return cn({},l,{unclearedCells:i,linesUntilNextLevel:s,level:a,combo:h,interval:G(a),partialInterval:0,timestamp:Date.now(),ghostCells:d,activeTetromino:f,nextTetromino:_,isFinished:c,isTiming:p,score:m})}function E(l,n){for(var t=l.activeTetromino,u=l.numRows,e=l.numCols,o=l.ghostCells,r=l.unclearedCells,i=e,a=t.cells.map(function(l){return l.row}),s=Math.min.apply(Math,a),c=Math.max.apply(Math,a),p=s;p<=c;p++){if("break"===function(l){var n=t.cells.filter(function(n){return n.row===l}),u=n.map(function(l){return l.column}),e=Math.min.apply(Math,u),o=r.filter(function(n){return n.row===l&&n.column<e}),a=o.length>0?Math.max.apply(Math,o.map(function(l){return l.column})):-1;if(0===(i=Math.min(i,e-a-1)))return"break"}(p))break}if(i>0){var _=k(t,-1,0,u,e),f=B(_,r,u);return o=_.cells.map(function(l){return pn({},l,{row:l.row+f})}),pn({},l,{ghostCells:o,activeTetromino:_})}return l}function U(l,n){for(var t=l.activeTetromino,u=l.numRows,e=l.numCols,o=l.ghostCells,r=l.unclearedCells,i=e,a=t.cells.map(function(l){return l.row}),s=Math.min.apply(Math,a),c=Math.max.apply(Math,a),p=s;p<=c;p++){if("break"===function(l){var n=t.cells.filter(function(n){return n.row===l}),u=n.map(function(l){return l.column}),o=Math.max.apply(Math,u),a=r.filter(function(n){return n.row===l&&n.column>o}),s=a.length>0?Math.min.apply(Math,a.map(function(l){return l.column})):e;if(0===(i=Math.min(i,s-o-1)))return"break"}(p))break}if(i>0){var _=k(t,1,0,u,e),f=B(_,r,u);return o=_.cells.map(function(l){return _n({},l,{row:l.row+f})}),_n({},l,{ghostCells:o,activeTetromino:_})}return l}function Z(l){if(0===l.length)return[];for(var n=[l[0]],t=1,u=l.length;t<u;t++)-1===n.indexOf(l[t])&&n.push(l[t]);return n}function K(l,n){var t,u,e=n.payload,o=l.activeTetromino,r=l.unclearedCells,i=l.numCols,a=l.numRows,s=o.unrotatedCells,c=o.type,p=o.orientation,_=o.cells;switch(p){case an.Normal:t=e?an.FlippedLeft:an.FlippedRight,u=(e?-.5:-1.5)*Math.PI;break;case an.FlippedLeft:t=e?an.UpsideDown:an.Normal,u=(e?-1:0)*Math.PI;break;case an.UpsideDown:t=e?an.FlippedRight:an.FlippedLeft,u=(e?-1.5:-.5)*Math.PI;break;case an.FlippedRight:t=e?an.Normal:an.UpsideDown,u=(e?0:-1)*Math.PI;break;default:t=p,u=0}if(c===W.O)return fn({},l,{activeTetromino:fn({},o,{orientation:t})});var f=q(s,c),m=Math.max.apply(Math,_.map(function(l){return l.row})),h=m===a-1;if(_=0!==u?V(s,u,f):s.slice(),h){var d=m;m=Math.max.apply(Math,_.map(function(l){return l.row}));var v=d-m;v>0&&(_=_.map(function(l){return fn({},l,{row:l.row+v})}))}var g=_.map(function(l){return l.column}),b=Math.min.apply(Math,g),w=Math.max.apply(Math,g),y=0;b<0?y=-b:w>=i&&(y=i-w-1),0!==y&&(_=_.map(function(l){return fn({},l,{column:l.column+y})}));var M=_.map(function(l){return l.row}),x=Math.min.apply(Math,M);m=Math.max.apply(Math,M);for(var k=m-x+1,T=!1,O=x;O<=m;O++){if("break"===function(l){var n=Z(_.filter(function(n){return n.row===l}).map(function(l){return l.column})),t=Z(r.filter(function(n){return n.row===l}).map(function(l){return l.column})),u=n.concat(t);if(Z(u).length<u.length)return T=!0,"break"}(O))break}var C;if(!T)for(C=0;C<k;C++){for(var P=b;P<=w;P++){var S=function(l){var n=Z(_.filter(function(n){return n.column===l}).map(function(l){return l.row-C})),t=Z(r.filter(function(n){return n.column===l}).map(function(l){return l.row})),u=n.concat(t);if(t.length>0&&(Math.max.apply(Math,n)>=a||Z(u).length<u.length))return T=!0,"break";T=!1}(P);if("break"===S)break}if(!T){C>0&&(_=_.map(function(l){return fn({},l,{row:l.row-C})}));break}}if(T)return l;o={orientation:t,type:c,unrotatedCells:s,cells:_};var L=B(o,r,a),N=o.cells.map(function(l){return fn({},l,{row:l.row+L})});return fn({},l,{activeTetromino:o,ghostCells:N})}function V(l,n,t){var u=Math.cos(n),e=Math.sin(n);return l.map(function(l){var n=l.row-t[0],o=l.column-t[1],r=Math.ceil(.5*Math.round(2*(t[0]+u*n-e*o))),i=Math.floor(.5*Math.round(2*(t[1]+e*n+u*o)));return{type:l.type,row:r,column:i}})}function q(l,n){switch(n){case W.I:case W.Z:return[l[1].row+.5,l[1].column];case W.S:return[l[1].row-.5,l[1].column];case W.T:case W.L:case W.J:default:return[l[1].row,l[1].column]}}function Y(l,n){var t=x(l.nextTetromino,l.numCols);return mn({},l,{isStarted:!0,isTiming:!0,partialInterval:0,timestamp:Date.now(),interval:G(1),isFinished:!1,level:1,linesUntilNextLevel:l.linesPerLevel,score:0,unclearedCells:[],activeTetromino:t,ghostCells:t.cells.map(function(n){return mn({},n,{row:n.row+l.numRows})}),nextTetromino:z()})}function J(l,n){return l.isTiming?hn({},l,{partialInterval:(l.partialInterval||l.interval)-(Date.now()-l.timestamp),isTiming:!1}):hn({},l,{isTiming:!0,timestamp:Date.now()})}function $(l,n){switch(void 0===l&&(l=vn),n.type){case ll:return Y(l,n);case nl:return J(l,n);case il:var t=n.payload;return dn({},l,{isHelpModalOpen:t,isPaused:!0});case tl:case ul:return A(l,n);case el:return E(l,n);case ol:return U(l,n);case rl:return K(l,n);default:return l}}Object.defineProperty(n,"__esModule",{value:!0});var W,X={production:!0},Q=function(){function l(){}return l}(),ll="NEW_GAME",nl="TOGGLE_PAUSE",tl="SOFT_DROP",ul="HARD_DROP",el="MOVE_ACTIVE_TETROMINO_LEFT",ol="MOVE_ACTIVE_TETROMINO_RIGHT",rl="ROTATE_ACTIVE_TETROMINO",il="TOGGLE_HELP_MODAL",al=t("ADVA"),sl=t("bKpL"),cl=(t.n(sl),t("asHm")),pl=(t.n(cl),t("Pic8")),_l=(t.n(pl),t("BdLl")),fl=(t.n(_l),t("Lssd")),ml=(t.n(fl),t("6DBm")),hl=(t.n(ml),t("q07K")),dl=(t.n(hl),function(){function l(l){this.store=l}return l.prototype.init=function(){var l=this,n=this.store.select(function(l){return l.tetris.isTiming}).partition(function(l){return l}),t=n[0],u=n[1],e=this.store.select(function(l){return l.tetris.partialInterval}),r=this.store.select(function(l){return l.tetris.interval});t.combineLatest(r,function(l,n){return n}).withLatestFrom(e).switchMap(function(l){var n=l[0],t=l[1];return sl.Observable.timer(t,n).takeUntil(u)}).subscribe(function(){l.store.dispatch(o(!0))})},l.ctorParameters=function(){return[{type:al.l}]},l}()),vl=t("ADVA"),gl=function(){function l(l,n){this.store=l,this.timer=n,this.state$=l.select(function(l){return l.tetris})}return l.prototype.ngAfterViewInit=function(){this.timer.init()},l.prototype.newGame=function(){this.store.dispatch(u())},l.prototype.togglePause=function(){this.store.dispatch(e())},l.prototype.softDrop=function(){this.store.dispatch(o(!1))},l.prototype.hardDrop=function(){this.store.dispatch(r())},l.prototype.moveLeft=function(){this.store.dispatch(i())},l.prototype.moveRight=function(){this.store.dispatch(a())},l.prototype.rotate=function(l){this.store.dispatch(s(l))},l.prototype.toggleHelpModal=function(l){this.store.dispatch(c(l))},l.ctorParameters=function(){return[{type:vl.l},{type:dl}]},l}(),bl=function(){function l(){}return Object.defineProperty(l.prototype,"cellClass",{get:function(){return this.isGhost?"ghost":this.cell.type},enumerable:!0,configurable:!0}),l}(),wl=t("/oeL"),yl=[],Ml=wl._1({encapsulation:2,styles:yl,data:{}}),xl=(wl.Z("app-cell",bl,_,{cell:"cell",size:"size",isGhost:"isGhost"},{},[]),function(){function l(){}return l.prototype.trackByFn=function(l,n){return l},l}()),kl=t("/oeL"),Tl=t("qbdv"),Ol=[],Cl=kl._1({encapsulation:2,styles:Ol,data:{}}),Pl=(kl.Z("app-tetromino",xl,h,{cells:"cells",cellSize:"cellSize",isGhost:"isGhost"},{},[]),t("/oeL")),Sl=function(){function l(){this.onMoveLeft=new Pl.m,this.onMoveRight=new Pl.m,this.onSoftDrop=new Pl.m,this.onRotate=new Pl.m,this.onHardDrop=new Pl.m,this.onTogglePause=new Pl.m,this.onNewGame=new Pl.m}return l.prototype.onKeyUp=function(l){if(78===l.keyCode)return void this.onNewGame.emit();if(80===l.keyCode&&this.state.isStarted&&!this.state.isFinished)return void this.onTogglePause.emit();if(this.state.isStarted&&!this.state.isFinished&&this.state.isTiming)switch(l.keyCode){case 37:this.onMoveLeft.emit();break;case 39:this.onMoveRight.emit();break;case 38:case 90:this.onRotate.emit(!0);break;case 88:this.onRotate.emit(!1);break;case 40:this.onSoftDrop.emit();break;case 32:this.onHardDrop.emit()}},Object.defineProperty(l.prototype,"width",{get:function(){return this.state.numCols*(this.state.cellSize-1)+1},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"height",{get:function(){return this.state.numRows*(this.state.cellSize-1)+1},enumerable:!0,configurable:!0}),l.prototype.unclearedCellsTrackBy=function(l){return l},Object.defineProperty(l.prototype,"isPaused",{get:function(){return this.state.isStarted&&!this.state.isFinished&&!this.state.isTiming},enumerable:!0,configurable:!0}),l}(),Ll=t("/oeL"),Nl=t("qbdv"),Rl=[],Dl=Ll._1({encapsulation:2,styles:Rl,data:{}}),Hl=(Ll.Z("app-board",Sl,b,{state:"state"},{onMoveLeft:"onMoveLeft",onMoveRight:"onMoveRight",onSoftDrop:"onSoftDrop",onRotate:"onRotate",onHardDrop:"onHardDrop",onTogglePause:"onTogglePause",onNewGame:"onNewGame"},[]),t("/oeL")),Fl=function(){function l(){this.onNew=new Hl.m,this.onPause=new Hl.m,this.onHelpBtnClick=new Hl.m}return Object.defineProperty(l.prototype,"isPaused",{get:function(){return this.isStarted&&!this.isFinished&&!this.isTiming},enumerable:!0,configurable:!0}),l.prototype.pauseBtnClicked=function(l){this.onPause.emit(),l.target.blur()},l.prototype.newGameBtnClicked=function(l){this.onNew.emit(),l.target.blur()},l}(),Il=t("/oeL"),zl=[],Gl=Il._1({encapsulation:2,styles:zl,data:{}}),jl=(Il.Z("app-controls",Fl,y,{isStarted:"isStarted",isFinished:"isFinished",isTiming:"isTiming"},{onNew:"onNew",onPause:"onPause",onHelpBtnClick:"onHelpBtnClick"},[]),this&&this.__assign||Object.assign||function(l){for(var n,t=1,u=arguments.length;t<u;t++){n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(l[e]=n[e])}return l}),Bl=this&&this.__assign||Object.assign||function(l){for(var n,t=1,u=arguments.length;t<u;t++){n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(l[e]=n[e])}return l},Al=function(){function l(){}return Object.defineProperty(l.prototype,"rowSpan",{get:function(){if(null===this.tetromino)return 0;var l=this.tetromino.cells.map(function(l){return l.row});return Math.max.apply(Math,l)-Math.min.apply(Math,l)+1},enumerable:!0,configurable:!0}),l.prototype.adjustTetrominoPosition=function(l){if(null===l)return l;var n=this.rowSpan;return k(x(l,3,!1),0,n,n,3)},l}(),El=t("/oeL"),Ul=[],Zl=El._1({encapsulation:2,styles:Ul,data:{}}),Kl=(El.Z("app-next-tetromino",Al,O,{tetromino:"tetromino",cellSize:"cellSize"},{},[]),function(){function l(){}return l}()),Vl=t("/oeL"),ql=[],Yl=Vl._1({encapsulation:2,styles:ql,data:{}}),Jl=(Vl.Z("app-scoreboard",Kl,P,{lines:"lines",score:"score",level:"level"},{},[]),t("/oeL")),$l=function(){function l(){this.onHelpModalClose=new Jl.m}return l}(),Wl=t("/oeL"),Xl=t("qbdv"),Ql=[],ln=Wl._1({encapsulation:2,styles:Ql,data:{}}),nn=(Wl.Z("app-help",$l,N,{isHelpModalOpen:"isHelpModalOpen"},{onHelpModalClose:"onHelpModalClose"},[]),t("/oeL")),tn=t("qbdv"),un=t("ADVA"),en=[],on=nn._1({encapsulation:2,styles:en,data:{}}),rn=nn.Z("app-root",gl,H,{},{},[]);!function(l){l.L="L",l.O="O",l.Z="Z",l.S="S",l.T="T",l.I="I",l.J="J"}(W||(W={}));var an,sn=Object.keys(W).filter(function(l){return isNaN(Number(l))});!function(l){l[l.Normal=0]="Normal",l[l.FlippedLeft=1]="FlippedLeft",l[l.UpsideDown=2]="UpsideDown",l[l.FlippedRight=3]="FlippedRight"}(an||(an={}));var cn=this&&this.__assign||Object.assign||function(l){for(var n,t=1,u=arguments.length;t<u;t++){n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(l[e]=n[e])}return l},pn=this&&this.__assign||Object.assign||function(l){for(var n,t=1,u=arguments.length;t<u;t++){n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(l[e]=n[e])}return l},_n=this&&this.__assign||Object.assign||function(l){for(var n,t=1,u=arguments.length;t<u;t++){n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(l[e]=n[e])}return l},fn=this&&this.__assign||Object.assign||function(l){for(var n,t=1,u=arguments.length;t<u;t++){n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(l[e]=n[e])}return l},mn=this&&this.__assign||Object.assign||function(l){for(var n,t=1,u=arguments.length;t<u;t++){n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(l[e]=n[e])}return l},hn=this&&this.__assign||Object.assign||function(l){for(var n,t=1,u=arguments.length;t<u;t++){n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(l[e]=n[e])}return l},dn=this&&this.__assign||Object.assign||function(l){for(var n,t=1,u=arguments.length;t<u;t++){n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(l[e]=n[e])}return l},vn={numRows:20,numCols:10,cellSize:36,level:1,linesPerLevel:10,linesUntilNextLevel:10,activeTetromino:null,nextTetromino:z(),score:0,combo:0,unclearedCells:[],ghostCells:[],isStarted:!1,isFinished:!1,isTiming:!1,timestamp:0,interval:0,partialInterval:0,isHelpModalOpen:!1},gn=t("/oeL"),bn=t("qbdv"),wn=t("fc+i"),yn=t("ADVA"),Mn=gn._0(Q,[gl],function(l){return gn._14([gn._15(512,gn.i,gn.W,[[8,[rn]],[3,gn.i],gn.x]),gn._15(5120,gn.v,gn._13,[[3,gn.v]]),gn._15(4608,bn.g,bn.f,[gn.v]),gn._15(4608,gn.h,gn.h,[]),gn._15(5120,gn.a,gn._5,[]),gn._15(5120,gn.t,gn._11,[]),gn._15(5120,gn.u,gn._12,[]),gn._15(4608,wn.b,wn.s,[bn.c]),gn._15(6144,gn.H,null,[wn.b]),gn._15(4608,wn.e,wn.f,[]),gn._15(5120,wn.c,function(l,n,t,u){return[new wn.k(l),new wn.o(n),new wn.n(t,u)]},[bn.c,bn.c,bn.c,wn.e]),gn._15(4608,wn.d,wn.d,[wn.c,gn.z]),gn._15(135680,wn.m,wn.m,[bn.c]),gn._15(4608,wn.l,wn.l,[wn.d,wn.m]),gn._15(6144,gn.F,null,[wn.l]),gn._15(6144,wn.p,null,[wn.m]),gn._15(4608,gn.L,gn.L,[gn.z]),gn._15(4608,wn.g,wn.g,[bn.c]),gn._15(4608,wn.i,wn.i,[bn.c]),gn._15(135680,yn.j,yn.j,[yn.a,yn.h,yn.i,yn.c]),gn._15(6144,yn.k,null,[yn.j]),gn._15(4608,yn.l,yn.l,[yn.k,yn.a,yn.f]),gn._15(4608,dl,dl,[yn.l]),gn._15(512,bn.b,bn.b,[]),gn._15(1024,gn.l,wn.q,[]),gn._15(1024,gn.b,function(l,n){return[wn.r(l,n)]},[[2,wn.h],[2,gn.y]]),gn._15(512,gn.c,gn.c,[[2,gn.b]]),gn._15(131584,gn._3,gn._3,[gn.z,gn.X,gn.r,gn.l,gn.i,gn.c]),gn._15(2048,gn.e,null,[gn._3]),gn._15(512,gn.d,gn.d,[gn.e]),gn._15(512,wn.a,wn.a,[[3,wn.a]]),gn._15(131584,yn.a,yn.a,[]),gn._15(2048,yn.g,null,[yn.a]),gn._15(256,yn.o,void 0,[]),gn._15(1024,yn.c,yn.s,[yn.o]),gn._15(256,yn.n,{tetris:$},[]),gn._15(2048,yn.q,null,[yn.n]),gn._15(1024,yn.b,yn.r,[gn.r,yn.n,yn.q]),gn._15(256,yn.p,yn.t,[]),gn._15(256,yn.d,[],[]),gn._15(1024,yn.e,yn.u,[yn.p,yn.d]),gn._15(131584,yn.f,yn.f,[yn.g,yn.c,yn.b,yn.e]),gn._15(2048,yn.h,null,[yn.f]),gn._15(131584,yn.i,yn.i,[]),gn._15(512,yn.m,yn.m,[yn.a,yn.h,yn.i]),gn._15(512,Q,Q,[])])}),xn=t("/oeL"),kn=t("fc+i");X.production&&Object(xn.R)(),Object(kn.j)().bootstrapModuleFactory(Mn)},gFIY:function(l,n){function t(l){return new Promise(function(n,t){t(new Error("Cannot find module '"+l+"'."))})}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="gFIY"}},[0]);