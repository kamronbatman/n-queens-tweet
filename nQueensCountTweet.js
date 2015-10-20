// Thank you Makersquare LA for everything you have done for me.
// This 106 character solution in a tweet is for you!
M=(K,S,L,A)=>{for(var a=0,t=(1<<K)-1,u=~(S|L|A);u&t;a+=M(K,(S|b)>>1,L|b,(A|b)<<1))u-=b=u&-u;return a|L==t}