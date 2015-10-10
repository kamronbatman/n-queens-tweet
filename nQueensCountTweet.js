// Thank you Makersquare LA for everything you have done for me.
// This 112 character solution in a tweet is for you!
function M(K,S,L,A){for(var a=L==t|0,t=(1<<K)-1,u=~(S|L|A);u&t;a+=M(K,(S|b)>>1,L|b,(A|b)<<1))u-=b=u&-u;return a}